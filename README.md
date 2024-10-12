# Bug Bounty Cheat Sheet

This is a comprehensive list of bug bounty cheat sheets, including links to resources and payloads.

## For Web View 
<b>https://ghosthets.github.io/Bug-scratch</b>
## Table of Contents

* [XSS](#xss)
* [SQLi](#sqli)
* [SSRF](#ssrf)
* [CRLF](#crlf)
* [CSV-Injection](#csv-injection)
* [Command Injection](#command-injection)
* [Directory Traversal](#directory-traversal)
* [LFI](#lfi)
* [XXE](#xxe)
* [Open-Redirect](#open-redirect)
* [RCE](#rce)
* [Crypto](#crypto)
* [Template Injection](#template-injection)
* [XSLT](#xslt)
* [Content Injection](#content-injection)
* [LDAP Injection](#ldap-injection)
* [NoSQL Injection](#nosql-injection)
* [CSRF Injection](#csrf-injection)
* [GraphQL Injection](#graphql-injection)
* [IDOR](#idor)
* [ISCM](#iscm)
* [LaTex Injection](#latex-injection)
* [OAuth](#oauth)
* [XPATH Injection](#xpath-injection)
* [Bypass Upload Tricky](#bypass-upload-tricky)

## Bug Bounty Cheat Sheet

<div class="container">
    <h1>Bug Bounty Cheat Sheet</h1>
    <div class="sanctions">
        <div class="sanction">
            <h2>XSS</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/xss.md">XSS Cheat Sheet</a></li>
                <li><a href="https://github.com/ismailtasdelen/xss-payload-list">XSS Payload List</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>SQLi</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/sqli.md">SQLi Cheat Sheet</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>SSRF</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/ssrf.md">SSRF Cheat Sheet</a></li>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Request%20Forgery">SSRF Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>CRLF</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/crlf.md">CRLF Cheat Sheet</a></li>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CRLF%20Injection">CRLF Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>CSV-Injection</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/csv-injection.md">CSV-Injection Cheat Sheet</a></li>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CSV%20Injection">CSV-Injection Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>Command Injection</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Command%20Injection">Command Injection Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>Directory Traversal</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Directory%20Traversal">Directory Traversal Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>LFI</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bug bounty-cheatsheet/blob/master/cheatsheets/lfi.md">LFI Cheat Sheet</a></li>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/File%20Inclusion">LFI Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>XXE</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/xxe.md">XXE Cheat Sheet</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>Open-Redirect</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/open-redirect.md">Open-Redirect Cheat Sheet</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>RCE</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/rce.md">RCE Cheat Sheet</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>Crypto</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/crypto.md">Crypto Cheat Sheet</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>Template Injection</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/template-injection.md">Template Injection Cheat Sheet</a></li>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Server%20Side%20Template%20Injection">Template Injection Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>XSLT</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/xslt.md">XSLT Cheat Sheet</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>Content Injection</h2>
            <ul>
                <li><a href="https://github.com/EdOverflow/bugbounty-cheatsheet/blob/master/cheatsheets/content-injection.md">Content Injection Cheat Sheet</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>LDAP Injection</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/LDAP%20Injection">LDAP Injection Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>NoSQL Injection</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/NoSQL%20Injection">NoSQL Injection Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>CSRF Injection</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/CSRF%20Injection">CSRF Injection Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>GraphQL Injection</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/GraphQL%20Injection">GraphQL Injection Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>IDOR</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Insecure%20Direct%20Object%20References">IDOR Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>ISCM</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Insecure%20Source% 20Code%20Management">ISCM Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>LaTex Injection</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/LaTeX%20Injection">LaTex Injection Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>OAuth</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/OAuth">OAuth Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>XPATH Injection</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XPATH%20Injection">XPATH Injection Payloads</a></li>
            </ul>
        </div>
        <div class="sanction">
            <h2>Bypass Upload Tricky</h2>
            <ul>
                <li><a href="https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/Upload%20Insecure%20Files">Bypass Upload Tricky Payloads</a></li>
            </ul>
        </div>
    </div>
</div>
