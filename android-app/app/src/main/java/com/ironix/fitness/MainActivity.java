package com.ironix.fitness;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.SharedPreferences;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebResourceError;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Button;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.LinearLayout;
import android.widget.ProgressBar;
import android.widget.TextView;

public class MainActivity extends Activity {
    private static final String PREFS = "ironix_app";
    private static final String KEY_SITE_URL = "site_url";

    private SharedPreferences prefs;
    private WebView webView;
    private ProgressBar progressBar;
    private String currentUrl;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        prefs = getSharedPreferences(PREFS, Context.MODE_PRIVATE);
        currentUrl = prefs.getString(KEY_SITE_URL, BuildConfig.IRONIX_URL);
        buildLayout();
        configureWebView();
        webView.loadUrl(normalizeUrl(currentUrl));
    }

    private void buildLayout() {
        LinearLayout root = new LinearLayout(this);
        root.setOrientation(LinearLayout.VERTICAL);
        root.setBackgroundColor(0xFF080808);

        LinearLayout toolbar = new LinearLayout(this);
        toolbar.setGravity(Gravity.CENTER_VERTICAL);
        toolbar.setOrientation(LinearLayout.HORIZONTAL);
        toolbar.setPadding(dp(14), dp(10), dp(10), dp(10));
        toolbar.setBackgroundColor(0xFF111111);

        TextView title = new TextView(this);
        title.setText("IRONIX");
        title.setTextColor(0xFFF2B12E);
        title.setTextSize(18);
        title.setGravity(Gravity.CENTER_VERTICAL);
        title.setTypeface(android.graphics.Typeface.DEFAULT_BOLD);
        toolbar.addView(title, new LinearLayout.LayoutParams(0, ViewGroup.LayoutParams.WRAP_CONTENT, 1));

        Button changeSite = new Button(this);
        changeSite.setText("Site");
        changeSite.setAllCaps(false);
        changeSite.setOnClickListener(view -> showUrlDialog(false));
        toolbar.addView(changeSite, new LinearLayout.LayoutParams(ViewGroup.LayoutParams.WRAP_CONTENT, dp(42)));

        progressBar = new ProgressBar(this, null, android.R.attr.progressBarStyleHorizontal);
        progressBar.setIndeterminate(true);
        progressBar.setVisibility(View.GONE);

        FrameLayout webContainer = new FrameLayout(this);
        webView = new WebView(this);
        webContainer.addView(webView, new FrameLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.MATCH_PARENT
        ));

        root.addView(toolbar, new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            ViewGroup.LayoutParams.WRAP_CONTENT
        ));
        root.addView(progressBar, new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            dp(3)
        ));
        root.addView(webContainer, new LinearLayout.LayoutParams(
            ViewGroup.LayoutParams.MATCH_PARENT,
            0,
            1
        ));
        setContentView(root);
    }

    private void configureWebView() {
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setMixedContentMode(WebSettings.MIXED_CONTENT_COMPATIBILITY_MODE);

        webView.setWebViewClient(new WebViewClient() {
            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon) {
                progressBar.setVisibility(View.VISIBLE);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                progressBar.setVisibility(View.GONE);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                if ("http".equals(uri.getScheme()) || "https".equals(uri.getScheme())) {
                    view.loadUrl(uri.toString());
                    return true;
                }
                return false;
            }

            @Override
            public void onReceivedError(WebView view, WebResourceRequest request, WebResourceError error) {
                if (request.isForMainFrame()) {
                    progressBar.setVisibility(View.GONE);
                    showUrlDialog(true);
                }
            }
        });
    }

    private void showUrlDialog(boolean loadFailed) {
        final EditText input = new EditText(this);
        input.setSingleLine(true);
        input.setText(currentUrl);
        input.setSelection(input.getText().length());
        input.setHint("http://10.0.2.2/ironix/");

        String message = loadFailed
            ? "Ironix could not be reached. For emulator use http://10.0.2.2/ironix/. For a real phone, use your computer LAN IP or your hosted URL."
            : "Set the Ironix website URL. Use your hosted site for release, or your PC LAN IP for local testing.";

        new AlertDialog.Builder(this)
            .setTitle("Ironix Website")
            .setMessage(message)
            .setView(input)
            .setPositiveButton("Open", (dialog, which) -> {
                currentUrl = normalizeUrl(input.getText().toString());
                prefs.edit().putString(KEY_SITE_URL, currentUrl).apply();
                webView.loadUrl(currentUrl);
            })
            .setNegativeButton("Cancel", null)
            .show();
    }

    private String normalizeUrl(String url) {
        String value = url == null ? "" : url.trim();
        if (value.isEmpty()) {
            value = BuildConfig.IRONIX_URL;
        }
        if (!value.startsWith("http://") && !value.startsWith("https://")) {
            value = "http://" + value;
        }
        return value;
    }

    @Override
    public void onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack();
            return;
        }
        super.onBackPressed();
    }

    @Override
    protected void onDestroy() {
        if (webView != null) {
            webView.destroy();
        }
        super.onDestroy();
    }

    private int dp(int value) {
        return Math.round(value * getResources().getDisplayMetrics().density);
    }
}
