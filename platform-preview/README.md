# BrandSpace platform visual preview

An isolated, static visual blueprint for the BrandSpace product. It preserves the existing `/demo` route and does not contain production backend logic.

## Included surfaces

- Customer workspace: Overview, Calendar, Posts, Composer, Design Studio, Campaigns, Media, Copilot, Ideas, Analytics, Reports, Social Accounts, Approvals, Team, Roles, Brand Brain, Brand Kit, Plan and Settings.
- Platform control center: Overview, Workspaces, Customers, Support Mode, Plans, Credits, AI configuration, Secrets, Flags, Audit and Operations.
- Entry and public flows.
- Desktop, collapsed sidebar, accessible mobile drawer, English and Arabic RTL.

## Interaction chain

Calendar or Overview post → post details drawer → library or composer. Copilot is available both as a full page and as a persistent contextual side panel.

## Local preview

```sh
npm install
npm run dev
```

This folder is self-contained, including its Brand Brain visual reference.
