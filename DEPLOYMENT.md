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
7. Upload all project files to the site's web root, usually `htdocs` or `public_html`.
8. Do not upload private local files like `.git`, `.env`, or `ironix_cookies.txt`.

## Local Development

Without `db_config.php`, the app keeps using the local XAMPP defaults:

```php
localhost / root / empty password / ironix_db
```
