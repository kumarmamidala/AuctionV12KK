import React from "react";
import "./TermsConditions.css";

function TermsConditions() {
  return (
    <div className="terms-part">
      <h1 className="heading-black terms-hr">User Agreement</h1>
      <hr className="terms-hrr" />
      <p className="paragraph">
        By accessing .gold domains auction, you agree to comply with all terms
        outlined herein. Engaging in any prohibited activities may result in
        account suspension or termination.
        <br />
        Our user agreement aims to foster a fair and transparent auction
        environment. Users must adhere to ethical conduct, refraining from any
        fraudulent or malicious activities. We reserve the right to investigate
        and take necessary actions against violations.
      </p>
      <h1 className="heading-black terms-hr !mb-[11px]">
        Account Responsibility
      </h1>
      <hr className="terms-hrr" />
      <p className="paragraph">
        Users are responsible for maintaining the confidentiality of their
        account information. Any unauthorized access or use of accounts should
        be reported immediately. We prioritize the security of your data, and
        employ industry-standard measures to safeguard your information.
        <br />
        Ensuring the accuracy of your account details is crucial for a seamless
        auction experience. We may request verification information to protect
        against identity theft and fraud. Your cooperation in these matters is
        essential for maintaining the integrity of our platform.
      </p>
      <h1 className="heading-black terms-hr">Bidding Guidelines</h1>
      <hr className="terms-hrr" />
      <p className="paragraph">
        Participating in auctions on .gold domains implies adherence to fair
        bidding practices. Users are expected to bid in good faith, avoiding any
        form of bid manipulation or interference. Violation of these guidelines
        may lead to bid invalidation or account suspension.
        {/* <ul>
          <li className="terms-li">
            {" "}
            The legal name and postal address of the Registrant (the Domain
            owner/holder).
          </li>
          <li className="terms-li"> The Domain being registered.</li>
          <li className="terms-li">
            The full legal name, postal address, e-mail address, voice telephone
            number, and, when available, fax number of the administrative,
            technical, and billing contacts for the Domain.
          </li>
          <li className="terms-li">
            The name of the primary nameserver and any secondary nameserver for
            the Domain. In case it is not provided, golddomainz.com Dns will be
            taken by default.
          </li>
        </ul> */}
        <br />
        Our platform is committed to providing equal opportunities for all
        bidders. Any attempt to manipulate the auction process, such as shill
        bidding or artificially inflating prices, is strictly prohibited. We
        encourage transparent and genuine bidding to ensure a level playing
        field for all participants.
      </p>
      <h1 className="heading-black terms-hr">Intellectual Property</h1>
      <hr className="terms-hrr" />
      <p className="paragraph">
        Respect for intellectual property rights is fundamental on our platform.
        Users are prohibited from listing, bidding on, or engaging in any
        transaction involving infringing or unauthorized use of intellectual
        property. We take intellectual property complaints seriously and will
        investigate and take appropriate action upon receiving a valid
        complaint.
        <br />
        Protecting the rights of intellectual property owners is a priority. If
        you believe your intellectual property rights are being violated, please
        promptly notify us. We will investigate such claims and take necessary
        actions, including the removal of infringing listings and, if necessary,
        suspension of the responsible user accounts.
      </p>
    </div>
  );
}

export default TermsConditions;
