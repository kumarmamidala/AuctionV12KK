import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCocktail,
  faHiking,
  faShuttleVan,
  faBeer,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { MdSell } from "react-icons/md";
import { GoRocket } from "react-icons/go";
import { HiCurrencyRupee } from "react-icons/hi";

export const ServiceData = [
  {
    icon: <FontAwesomeIcon icon={faCocktail} />,
    title: "Performance",
    info: "We put less strain on our equipment than our competitors, giving your site breathing room during peak moments and allowing you to execute more complex scripts.",
  },
  {
    icon: <FontAwesomeIcon icon={faHiking} />,
    title: "Security",
    info: "We take security very seriously. Our infrastructure is protected by the most recent hardware and software firewalls. The operating systems on our servers are constantly updated and secured. Because of Domohost's commitment to security, your websites are safer here.",
  },
  {
    icon: <FontAwesomeIcon icon={faShuttleVan} />,
    title: "Uptime",
    info: "Every calendar month, the network architecture that supports our web hosting servers provides 100% uptime. To offer full redundancy at all levels of our network, we use redundant bandwidth providers, routers, and switches.",
  },
  {
    icon: <FontAwesomeIcon icon={faBeer} />,
    title: "Support",
    info: "Domohost strives to provide complete client satisfaction with all of our hosting services. That is why we provide fast, dependable, and secure service that is backed up by our courteous and professional Support Team around the clock.",
  },
];

export const SellDomainServiceData = [
  {
    icon: <FontAwesomeIcon icon={faHiking} />,
    title: "Audience",
    info: "Domohost is visited by millions of people each year looking for a new domain for their startup. We currently tend to sell a roughly 50:50 mix of keyword domains and brandable domains (i.e. invented words).",
  },
  {
    // icon: <FontAwesomeIcon icon={faShuttleVan} />,
    icon: <GoRocket />,
    title: "Quality",
    info: "We deliberately avoid selling domains that we consider to be low quality, to keep our marketplace attractive. Right now, this means we only accept reasonably short dot-com domains which meet specific criteria.",
  },
  {
    icon: <HiCurrencyRupee />,
    title: "Sale price",
    info: "Our average domain sells for around $3,000 USD, with over 97% of our domains priced over $1,000. We don't let you list domains below $1,000 unless they've already been listed for sale on Domohost for a while",
  },
];
