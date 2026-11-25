import React from "react"
import Seo from "../../components/seo"
import FeederPage, {
  Callout,
  ContactLink,
  H2,
  InternalLink,
  OL,
  P,
  Section,
  UL,
} from "../../components/feeder/feederPage"

export const Head = () => (
  <Seo
    title="Delete your Feeder account"
    description="How to delete your Feeder account and data, what is removed, and how to request deletion if you cannot sign in."
  />
)

const DeleteAccount = () => (
  <FeederPage title="Delete your account" lastUpdated="25 November 2026">
    <Callout>
      <P>
        This page explains how to delete your Feeder account and its data.
        Feeder is a private household meal planner built and run by Kriss
        Wiltshire, an individual developer.
      </P>
    </Callout>

    <Section>
      <H2>Delete in the app</H2>
      <OL>
        <li>Sign in to Feeder (Android app or web app).</li>
        <li>Open Settings, then Account / Security.</li>
        <li>Choose Delete account.</li>
        <li>Confirm when asked.</li>
      </OL>
      <P>
        Your account is marked as deleted straight away and you will be signed
        out. This is a "soft delete": the data is taken out of use immediately
        and is then permanently purged after about 30 days (this is the
        intended practice).
      </P>
    </Section>

    <Section>
      <H2>Before you delete</H2>
      <P>
        Deletion cannot be fully undone once the purge has happened. If you want
        a copy of your data first, use the export in the app if it is available
        to you, or email me and I will send you a copy (see below).
      </P>
    </Section>

    <Section>
      <H2>What is removed</H2>
      <UL>
        <li>Your account: email address, password hash and sign-in sessions.</li>
        <li>
          Your personal data: food log, weight, goals and macros, your optional
          private log, and any supplement or medication schedules you entered.
        </li>
        <li>
          Your notification registrations (Android device token and web push
          subscription) and any integration or calendar feed tokens you
          created.
        </li>
        <li>
          Any Health Connect data Feeder stored for you. (Data held in Health
          Connect itself stays on your phone; manage it in Android's Health
          Connect settings.)
        </li>
      </UL>
      <P>
        Shared household content, such as recipes, shopping lists and meal
        plans, belongs to the household and may stay available to the other
        members if they continue to use Feeder. If you want the whole household
        and all of its data removed, including children's profiles, say so in
        your request and I will delete it.
      </P>
      <P>
        Content you sent to an AI provider or to Firebase for a feature you
        used is handled under those providers' terms as described in the{" "}
        <InternalLink to="/feeder/privacy">privacy policy</InternalLink>. Copies
        in server backups, if any exist, may remain until those backups rotate
        out.
      </P>
    </Section>

    <Section>
      <H2>If you cannot access your account</H2>
      <P>
        If you have lost your password, cannot sign in, or have already
        uninstalled the app, email me and I will delete your account and data
        for you.
      </P>
      <UL>
        <li>
          Email: <ContactLink />
        </li>
        <li>
          Subject: <strong>Feeder account deletion</strong>
        </li>
        <li>
          Include the email address on the account, and whether you want just
          your account deleted or the whole household.
        </li>
      </UL>
      <P>
        I may ask you to confirm you own the account (for example by replying
        from the account email address) before deleting anything. I aim to
        reply within a few days, and deletion then follows the same soft-delete
        and roughly 30 day purge described above.
      </P>
      <P>
        You can also ask for only some of your data to be deleted without
        closing the account, using the same email address and subject.
      </P>
    </Section>

    <Section>
      <H2>More information</H2>
      <P>
        Read the <InternalLink to="/feeder/privacy">privacy policy</InternalLink>{" "}
        and <InternalLink to="/feeder/terms">terms of service</InternalLink>.
      </P>
    </Section>
  </FeederPage>
)

export default DeleteAccount
