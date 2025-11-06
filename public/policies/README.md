# Policy Pages Documentation

## Overview
This directory contains all legal and policy pages for SubTranslate. These pages are automatically included in the production build and accessible at `/policies/` URLs.

## Policy Pages

### 1. Privacy Policy (`privacy.html`)
**URL:** `/policies/privacy.html`

**Contents:**
- Data collection practices
- How we use your information
- Data sharing and disclosure
- Security measures
- User rights and choices
- Children's privacy
- Contact information for privacy concerns

**Key Points:**
- API keys stored locally in browser, not on our servers
- Files are not stored after translation
- Complies with GDPR and privacy regulations

### 2. Terms of Service (`terms.html`)
**URL:** `/policies/terms.html`

**Contents:**
- Service description and user requirements
- Prohibited uses and user conduct
- Intellectual property rights
- Service availability and disclaimers
- Limitation of liability
- Termination conditions
- Governing law and contact information

**Key Points:**
- Service is provided "as is"
- Users must be 13+ years old
- Users provide their own Google Gemini API key
- No warranties or guarantees

### 3. Cookie Policy (`cookie.html`)
**URL:** `/policies/cookie.html`

**Contents:**
- Explanation of cookies and local storage
- Types of storage used
- How to manage storage settings
- Third-party cookies
- Security considerations
- Do Not Track (DNT) policy

**Key Points:**
- Uses local storage (not traditional cookies)
- Only stores API key locally (optional)
- No tracking or analytics cookies
- Full user control over storage

### 4. Acceptable Use Policy (`acceptable-use.html`)
**URL:** `/policies/acceptable-use.html`

**Contents:**
- Permitted and prohibited uses
- Content ownership and copyright
- Rate limits and resource usage
- User conduct guidelines
- Monitoring and enforcement
- Reporting violations
- Appeals process

**Key Points:**
- Prohibits illegal and harmful content
- No technical abuse or system overload
- Respect for intellectual property
- Violation response procedures

## Footer Integration

All policy pages are linked in the application footer in `App.tsx`:
- Privacy Policy
- Terms of Service
- Cookie Policy
- Acceptable Use

The footer also includes:
- Copyright notice
- Varabit branding
- Link to Varabit website

## Design Consistency

All policy pages follow the same design system:
- Consistent color scheme (Primary: #3F51B5)
- Matching typography and spacing
- Responsive design
- "Back to SubTranslate" link
- Professional, accessible layout

## Build Integration

All policy pages are automatically included in the production build and are available at:
- `dist/policies/privacy.html`
- `dist/policies/terms.html`
- `dist/policies/cookie.html`
- `dist/policies/acceptable-use.html`

## Updating Policies

To update any policy:
1. Edit the corresponding HTML file in `public/policies/`
2. Update the "Last Updated" date
3. Rebuild the project
4. Deploy the updated dist folder

## Legal Compliance

These policies ensure compliance with:
- GDPR (General Data Protection Regulation)
- CCPA (California Consumer Privacy Act)
- COPPA (Children's Online Privacy Protection Act)
- DMCA (Digital Millennium Copyright Act)
- General web application best practices

## Contact

For questions about these policies:
- Legal: legal@varabit.com
- Privacy: privacy@varabit.com
- General: https://varabit.com/contact
