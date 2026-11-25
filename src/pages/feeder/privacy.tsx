import React from "react"
import Seo from "../../components/seo"
import FeederPage, {
  A,
  Callout,
  ContactLink,
  H2,
  H3,
  InternalLink,
  P,
  Section,
  UL,
} from "../../components/feeder/feederPage"

export const Head = () => (
  <Seo
    title="Feeder Privacy Policy"
    description="Privacy policy for Feeder, a private household meal planner, food log and shopping list app."
  />
)

const Privacy = () => (
  <FeederPage title="Privacy Policy" lastUpdated="25 November 2026">
    <Callout>
      <P>
        Feeder is a private household meal planner, food log and shopping list.
        It is built and run by me, Kriss Wiltshire, as an individual developer.
        It is not a company product, it is not a public multi-tenant service,
        and I do not sell your data.
      </P>
    </Callout>

    <Section>
      <H2>Who this covers</H2>
      <P>
        This policy covers the Feeder Android app, the Feeder web app (including
        the installable browser version) and the server they talk to. Feeder is
        for a single household: the people in it sign in, and their data is
        stored on a server that is self-hosted for that household, not on a
        shared public cloud service. I am the data controller for that server
        for the purposes of UK data protection law. The app is currently in
        household / internal testing.
      </P>
    </Section>

    <Section>
      <H2>What Feeder may hold</H2>
      <P>
        What is actually stored depends on which features your household turns
        on. At most, it can include:
      </P>
      <UL>
        <li>
          <strong>Account:</strong> your email address, a password hash (never
          the password itself) and sign-in sessions.
        </li>
        <li>
          <strong>Household:</strong> household settings, meal plans, recipes,
          shopping lists, and pantry and freezer contents.
        </li>
        <li>
          <strong>Per person:</strong> food log entries, weight, goals and
          macros, and an optional private log.
        </li>
        <li>
          <strong>Children's profiles:</strong> an adult can add profiles for
          children in the household (for example age, portion sizes and goals).
        </li>
        <li>
          <strong>Supplements and medication schedules (optional):</strong>{" "}
          only what a person chooses to type in, so they can log and be
          reminded. Feeder does not give medical advice about them.
        </li>
        <li>
          <strong>Health Connect data (optional, Android):</strong> see below.
        </li>
        <li>
          <strong>Notifications:</strong> a device token (Android) or browser
          push subscription (web) so alerts can be delivered to you.
        </li>
        <li>
          <strong>Integration tokens (optional):</strong> tokens the household
          creates for a Home Assistant connection or a calendar feed.
        </li>
      </UL>
    </Section>

    <Section>
      <H2>Why it is used</H2>
      <P>
        Only to run Feeder for your household: to sign you in, plan meals, keep
        a food log, build shopping lists, track the goals you set, and send the
        alerts you ask for. I do not use it for advertising and I do not build
        advertising profiles.
      </P>
      <P>
        In plain legal terms, I process this data because it is needed to
        provide the app you have chosen to use in your household (and, where
        that does not apply, for the legitimate purpose of running a private
        household tool). Health-related information, and anything about
        children, is only in Feeder because an adult in the household chose to
        enter it, and I treat that choice as the basis for storing it. You can
        remove it at any time (see "Your rights").
      </P>
    </Section>

    <Section>
      <H2>Health information</H2>
      <P>
        Weight, goals, macros, supplements and medication schedules are
        health-related and sensitive. They are used only inside your household's
        Feeder to show you your own logs and progress. They are not shared with
        advertisers or data brokers and are not used to make decisions about
        you.
      </P>
      <Callout>
        <P>
          <strong>Not medical advice.</strong> Feeder is not a medical device.
          It does not diagnose, treat, cure or prevent any condition.
          Nutrition information and child portion suggestions are guidance
          only. For medical advice, speak to your GP, pharmacist or health
          visitor.
        </P>
      </Callout>
    </Section>

    <Section>
      <H2>Children's data in a household</H2>
      <P>
        Feeder is not designed for children to use themselves. Child profiles
        are created and managed by an adult in the household, and may include
        age, portion sizes and goals. I treat this as sensitive: it is stored on
        the household's server, used only to plan portions and meals, and is
        never sold or used for advertising. If you are a parent or guardian and
        want a child's profile removed, delete it in the app or contact me.
      </P>
    </Section>

    <Section>
      <H2>Health Connect (Android, optional)</H2>
      <P>
        If you choose to connect Health Connect, Feeder asks for permission to{" "}
        <strong>read</strong> your weight, steps, active calories, sleep and
        workouts, and to <strong>write</strong> nutrition you have logged back
        to Health Connect. Each permission is separate and you can decline any
        of them.
      </P>
      <UL>
        <li>
          Health Connect data is used only to show you your own information in
          Feeder and to support the goals you set.
        </li>
        <li>
          It is not sold, not used for advertising, and not shared with third
          parties other than the processors needed to run the service (see
          "Who processes data").
        </li>
        <li>
          You can revoke access at any time in Android's Health Connect
          settings, or turn the feature off in Feeder.
        </li>
      </UL>
    </Section>

    <Section>
      <H2>Who processes data</H2>
      <P>
        I do not sell personal data. Data is shared only with the services
        below, and only as needed to run Feeder.
      </P>

      <H3>Self-hosted server</H3>
      <P>
        Your household's data lives on the server that runs Feeder for your
        household. It is not pooled with other households.
      </P>

      <H3>AI features (only when AI is turned on)</H3>
      <P>
        AI features are optional and off unless the household enables them.
        When AI is on, the content you submit for an AI feature (for example a
        photo or file of food, a pantry or freezer shelf, or a recipe, or the
        data needed to write a diet summary) is sent to a model provider such
        as{" "}
        <A
          href="https://www.anthropic.com/legal/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anthropic
        </A>{" "}
        so it can recognise food or recipes or write the summary. For the
        pantry and recipe-import flows, photos are used to get the result and
        are not kept as photos long-term. The provider processes the content
        under its own terms and privacy policy. If you do not want this, leave
        AI features off.
      </P>

      <H3>Push notifications</H3>
      <P>
        On the Android app, alerts are delivered through{" "}
        <A
          href="https://firebase.google.com/support/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Firebase Cloud Messaging
        </A>{" "}
        (Google), which receives a device token and the notification content.
        On the web app, alerts use your browser's standard web push service.
      </P>

      <H3>Food databases</H3>
      <P>
        To look up foods and nutrition, Feeder queries public databases such as{" "}
        <A
          href="https://world.openfoodfacts.org/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Food Facts
        </A>
        , USDA food data and UK food composition tables. These lookups send what
        you searched for or scanned (such as a food name or barcode), not your
        account details.
      </P>

      <H3>Integrations you set up</H3>
      <P>
        If your household connects Home Assistant or shares a calendar feed,
        the relevant data is made available to that system using the token the
        household created. Anyone who has a feed link or token can see what it
        exposes, so keep them private and revoke them if they leak.
      </P>
    </Section>

    <Section>
      <H2>Retention</H2>
      <P>
        Your data is kept while your account is active. When an account is
        deleted it is soft-deleted first (taken out of use straight away), and
        the intended practice is to permanently purge it after about 30 days.
        See{" "}
        <InternalLink to="/feeder/delete-account">
          how to delete your account
        </InternalLink>
        . Copies held in server backups, if the household keeps any, may remain
        until those backups are rotated out.
      </P>
    </Section>

    <Section>
      <H2>Security</H2>
      <P>
        Passwords are stored as hashes. Sign-in uses sessions that can be
        ended, and the app and server are accessed over encrypted connections.
        Access to the server is limited to the person running it. This is a
        personal project, not a certified security programme, and no system is
        perfectly secure. If I become aware of a breach affecting your data I
        will tell the affected household.
      </P>
    </Section>

    <Section>
      <H2>Your rights</H2>
      <P>
        You can ask to see the personal data held about you, to have it
        corrected, to have a copy of it, and to have it deleted. Where the app
        offers an export, you can use it directly; otherwise email me and I
        will provide your data. You can delete your account yourself in the app
        or by asking me. If you are in the UK you can also complain to the
        Information Commissioner's Office at{" "}
        <A href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
          ico.org.uk
        </A>
        , though I would like the chance to fix things first.
      </P>
    </Section>

    <Section>
      <H2>Changes</H2>
      <P>
        If I change this policy I will update the date at the top. If a change
        is significant I will tell household members in the app or by email.
      </P>
    </Section>

    <Section>
      <H2>Contact</H2>
      <P>
        Kriss Wiltshire (individual developer) - <ContactLink />
      </P>
      <P>
        See also the <InternalLink to="/feeder/terms">terms of service</InternalLink>{" "}
        and{" "}
        <InternalLink to="/feeder/delete-account">
          account deletion instructions
        </InternalLink>
        .
      </P>
    </Section>
  </FeederPage>
)

export default Privacy
