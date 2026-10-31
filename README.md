# rhuang338.github.io
Display school notice

Primary Risks

Accidental Exposure of Secrets (API Keys & Passwords): Automated web bots continuously scan public GitHub repositories for hardcoded API keys, database passwords, tokens, and credentials. Committing these secrets publicly can lead to compromised cloud services or financial loss.

Git Commit History Retention: Simply removing a sensitive file or key in a new commit does not delete it from GitHub. Anyone can browse your commit history or access raw git objects to view previous versions of your code.

Exposure of Personal Identifiable Information (PII): Storing files like resumes, private notes, phone numbers, home addresses, or unreleased drafts inside the project folder makes them instantly searchable and permanently indexable by search engines.

Full Source Code Visibility: Anyone can view, copy, fork, or clone your complete HTML, CSS, JavaScript, and custom asset codebase.

Email Scraping and Spam: Hardcoding your personal email address into markdown or HTML templates exposes it to automated scraping tools, leading to an increase in spam and phishing emails.

Resource and Bandwidth Limits: GitHub Pages enforces soft usage limits (1 GB repository size limit, 100 GB monthly bandwidth limit, and 10 builds per hour). Severe overuse can lead to site throttling or account warnings.

Best Practices to Stay Safe

Keep Secrets Out of Code: Never commit credentials. For dynamic features like contact forms, use third-party serverless services (e.g., Formspree, Formkeep, or Netlify Forms) rather than custom backend tokens.

Use .gitignore Appropriately: Add build artifacts, temporary scratchpads, local environment files (.env), and personal document folders to your .gitignore file before making your initial commit.

Protect Contact Info: Use obfuscated email scripts, contact forms, or public alias emails instead of printing your primary personal email in plain text.

Purge Accidental Pushes: If you accidentally push sensitive data, changing or rotating the compromised key immediately is mandatory. To scrub it from Git history, use tools like git-filter-repo or BFG Repo-Cleaner.

Add a License: Include a LICENSE file in your repository (e.g., MIT, CC-BY-4.0, or All Rights Reserved) to clarify how others may or may not use your source code and written content.
