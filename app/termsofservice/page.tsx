import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Services',
};
export default function Page() {
  return (
    <div className="my-4 lg:my-8 lg:text-justify lg:text-lg ">
      <h1 className="bold mb-2 text-2xl font-bold text-slate-200 md:text-3xl">
        Terms of Service for{' '}
        <Link href="./" className="text-cyan-700 hover:text-cyan-400">
          alfamovies
        </Link>
      </h1>
      <p className="mb-4 mt-1 text-base text-slate-400">
        Welcome to Alfamovies! These terms and conditions govern your use of our
        website and services. Alfamovies is a platform designed to provide users
        with access to a wide range of movies hosted on third-party servers. By
        accessing or using Alfamovies, you agree to comply with these terms. If
        you do not agree with any part of these terms, please refrain from using
        our services.
      </p>

      <h2 className="text-xl font-semibold text-slate-300 md:text-2xl">
        Use of Content
      </h2>
      <p className="mb-4 mt-1 text-base text-slate-400">
        Alfamovies does not host any movies directly. We aggregate links from
        third-party servers and provide a platform for users to access this
        content. We do not claim ownership of any movies, and the rights and
        ownership of all content remain with their respective creators,
        distributors, or copyright holders. Users are solely responsible for
        ensuring they have the necessary permissions to access and view the
        content in accordance with their local laws.
      </p>

      <h2 className="text-xl font-semibold text-slate-300 md:text-2xl">
        Third-Party Hosting
      </h2>
      <p className="mb-4 mt-1 text-base text-slate-400">
        We utilize third-party servers to host and stream movies available on
        our platform. While we make every effort to ensure the quality and
        legality of the content provided, we do not control or endorse the
        material hosted on these external servers. Therefore, Alfamovies is not
        liable for any content accessed through these third-party links,
        including but not limited to accuracy, legality, or reliability. Users
        access these external links at their own risk.
      </p>

      <h2 className="text-xl font-semibold text-slate-300 md:text-2xl">
        User Responsibilities
      </h2>
      <p className="mb-4 mt-1 text-base text-slate-400">
        By using Alfamovies, you agree not to engage in any illegal,
        unauthorized, or prohibited activities, including but not limited to
        copyright infringement, hacking, or distribution of malicious software.
        Users are responsible for maintaining the confidentiality of their
        account information and agree to take sole responsibility for any
        activities or content associated with their account.
      </p>

      <h2 className="text-xl font-semibold text-slate-300 md:text-2xl">
        Privacy Policy
      </h2>
      <p className="mb-4 mt-1 text-base text-slate-400">
        Alfamovies respects user privacy and is committed to protecting any
        personal information collected during your use of our services. We may
        collect certain data, such as browsing history or cookies, to improve
        user experience. However, we do not share or sell this information to
        third parties for marketing purposes. Please refer to our Privacy Policy
        for more details on how we handle and protect your data.
      </p>

      <p className="mb-4 mt-1 text-base text-slate-400">
        These Terms of Service may be updated periodically, and continued use of
        Alfamovies constitutes acceptance of any changes...
      </p>

      <p className="mb-4 mt-1 text-base text-slate-400">
        If you have any questions or concerns regarding these terms or our
        services, please contact us at{' '}
        <Link
          href="mailto:alfafrontenddev@gmail.com"
          className="text-cyan-700 hover:text-cyan-400"
        >
          this mail
        </Link>
        . Thank you for choosing Alfamovies!
      </p>

      <p className="mb-4 mt-1 text-base text-slate-400">
        These Terms of Service may be updated periodically, and continued use of
        Alfamovies constitutes acceptance of any changes. It is recommended to
        review these terms regularly. If you have any questions or concerns
        regarding these terms or our services, please send us a{' '}
        <Link
          href="mailto:alfafrontenddev@gmail.com"
          className="text-cyan-700 hover:text-cyan-400"
        >
          {' '}
          mail
        </Link>
        . Thank you for choosing Alfamovies!
      </p>
    </div>
  );
}
