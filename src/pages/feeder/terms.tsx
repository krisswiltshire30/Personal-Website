import React from "react"
import Seo from "../../components/seo"
import FeederPage, {
  Callout,
  ContactLink,
  H2,
  InternalLink,
  P,
  Section,
  UL,
} from "../../components/feeder/feederPage"

export const Head = () => (
  <Seo
    title="Feeder Terms of Service"
    description="Terms of service for Feeder, a private household meal planner, food log and shopping list app."
  />
)

const Terms = () => (
  <FeederPage title="Terms of Service" lastUpdated="25 November 2026">
    <Section>
      <P>
        These terms cover your use of Feeder, a private household meal planner,
        food log and shopping list built and run by me, Kriss Wiltshire, as an
        individual developer. By using Feeder you agree to them. If you do not
        agree, please do not use the app.
      </P>
    </Section>

    <Section>
      <H2>Personal and household use</H2>
      <P>
        Feeder is for personal, household use only. It is not a public
        software-as-a-service product, and it is currently in household /
        internal testing. You may not resell it, offer it to others as a
        service, or use it for commercial purposes.
      </P>
    </Section>

    <Section>
      <H2>Not medical advice</H2>
      <Callout>
        <P>
          Feeder is not a medical device. It does not diagnose, treat, cure or
          prevent any condition. Nutrition information, calorie and macro
          figures, and child portion suggestions are guidance only, and may be
          incomplete or wrong. They are not a substitute for professional
          advice. For medical advice, including about diet, weight, allergies,
          supplements, medication or feeding children, speak to your GP,
          pharmacist or health visitor. Medication and supplement entries are
          for logging and reminders only.
        </P>
      </Callout>
    </Section>

    <Section>
      <H2>Accounts</H2>
      <UL>
        <li>You need an account to use Feeder, and must give a valid email address.</li>
        <li>Keep your password private. You are responsible for activity on your account.</li>
        <li>
          Only adults should create accounts. Children's profiles are managed by
          an adult in the household.
        </li>
        <li>
          You can delete your account at any time. See{" "}
          <InternalLink to="/feeder/delete-account">
            how to delete your account
          </InternalLink>
          .
        </li>
        <li>
          I may suspend or remove an account that breaks these terms or puts
          the service or other users at risk.
        </li>
      </UL>
    </Section>

    <Section>
      <H2>Acceptable use</H2>
      <P>You agree not to:</P>
      <UL>
        <li>break the law or use Feeder to harm, harass or deceive anyone;</li>
        <li>try to access other households' data or anyone else's account;</li>
        <li>probe, overload, reverse engineer or attack the app or the server;</li>
        <li>upload content you do not have the right to use, or anything unlawful;</li>
        <li>share integration tokens or calendar feed links with people who should not see that data.</li>
      </UL>
    </Section>

    <Section>
      <H2>Your content</H2>
      <P>
        You keep ownership of what you put into Feeder (recipes, logs, lists
        and so on). You give me permission to store and process it as needed to
        run the app for your household, including sending it to the services
        described in the{" "}
        <InternalLink to="/feeder/privacy">privacy policy</InternalLink> when
        you turn those features on. You are responsible for making sure you are
        allowed to add it, and for the information you enter about other people
        in your household, including children.
      </P>
    </Section>

    <Section>
      <H2>Availability</H2>
      <P>
        Feeder is self-hosted and run on a best-effort basis. It may be slow,
        unavailable, changed or switched off at any time, with or without
        notice. Features that depend on third parties (such as AI providers,
        food databases, Firebase or Health Connect) may stop working if those
        services change. There is no guarantee of uptime or support.
      </P>
    </Section>

    <Section>
      <H2>Intellectual property</H2>
      <P>
        Feeder, its code, design and branding belong to me. These terms give you
        a personal, non-exclusive, non-transferable right to use the app for
        your household while you are permitted to use it. Food data from third
        parties (such as Open Food Facts and USDA) remains subject to its own
        licences.
      </P>
    </Section>

    <Section>
      <H2>Limitation of liability</H2>
      <P>
        Feeder is provided "as is", without warranties of any kind. As it is a
        free personal project, to the fullest extent permitted by law I am not
        liable for any loss arising from your use of it, including loss of data,
        inaccurate nutrition or portion information, or decisions you make
        based on it. Nothing in these terms limits liability that cannot be
        limited by law, such as for death or personal injury caused by
        negligence, or for fraud. Please keep your own copy of anything
        important.
      </P>
    </Section>

    <Section>
      <H2>Changes</H2>
      <P>
        I may update these terms. The date at the top shows when they last
        changed. Continuing to use Feeder after a change means you accept the
        updated terms.
      </P>
    </Section>

    <Section>
      <H2>Governing law</H2>
      <P>
        These terms are governed by the law of England and Wales, and the courts
        of England and Wales have jurisdiction, unless mandatory consumer law
        where you live says otherwise.
      </P>
    </Section>

    <Section>
      <H2>Contact</H2>
      <P>
        Kriss Wiltshire (individual developer) - <ContactLink />
      </P>
    </Section>
  </FeederPage>
)

export default Terms
