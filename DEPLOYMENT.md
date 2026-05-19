# Ironix Deployment

Ironix is a PHP and MySQL app. GitHub Pages cannot run the full app because it does not execute PHP or host MySQL databases.

## Free Hosting Option

Use a free PHP/MySQL host such as InfinityFree.

## Upload Steps

1. Create a free hosting account.
2. Create a new website or free subdomain.
3. Open the hosting control panel and create a MySQL database.
4. Import `database.sql` into that database using phpMyAdmin.
5. Copy `db_config.example.php` to `db_config.php`.
6. Edit `db_config.php` with the database host, username, password, and database name from the hosting control panel.
7. Upload the contents of `ironix-deploy.zip` to the site's web root, usually `htdocs` or `public_html`.
8. Make sure `index.php` is in the web root. The included `.htaccess` tells Apache to load `index.php` first.
9. Do not upload private local files like `.git`, `.env`, `db_config.php`, or `ironix_cookies.txt`.

## If the Published Site Looks Blank or Unstyled

- Confirm the host supports PHP and MySQL. Static hosts such as GitHub Pages do not run the full app.
- Confirm the uploaded web root contains `index.php`, `Css/style.css`, and the `Js` folder directly in the same folder.
- Keep the folder names exactly as shipped: `Css` and `Js`. Linux hosting is case-sensitive.
- Extract `ironix-deploy.zip` before uploading. Do not upload the zip file itself as the website root.
- If the host only serves static HTML, the included `.html` pages now show a styled preview, but login, signup, saved workouts, and progress history still require PHP/MySQL.

## Local Development

Without `db_config.php`, the app keeps using the local XAMPP defaults:

```php
localhost / root / empty password / ironix_db
```
