import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import toast from "react-hot-toast";

import {
  MdCreateNewFolder,
  MdOutlinePrivacyTip,
  // MdOutlineRocketLaunch,
} from "react-icons/md";
import { BsCalendarX } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function DomainDetails({ domain, onClose }) {
  const [nameServer1, setNameServer1] = useState(domain.nameserver1 || "");
  const [nameServer2, setNameServer2] = useState(domain.nameserver2 || "");
  const [nameServer3, setNameServer3] = useState(domain.nameserver3 || "");
  const [nameServer4, setNameServer4] = useState(domain.nameserver4 || "");

  const [contactInfo, setContactInfo] = useState(null);
  const [dnsRecords, setDnsRecords] = useState({});

  // NAMESERVERS UPDATE TAB SECTION
  const handleUpdateNameservers = () => {
    // Make an API request to update nameservers
    const apiKey = "vqp3xslgRAouVzM";
    const domainNameId = domain.domainNameId;
    const websiteName = domain.websiteName;

    axios
      .get(
        `https://api.connectreseller.com/ConnectReseller/ESHOP/UpdateNameServer?APIKey=${apiKey}&domainNameId=${domainNameId}&websiteName=${websiteName}&nameServer1=${nameServer1}&nameServer2=${nameServer2}&nameServer3=${nameServer3}&nameServer4=${nameServer4}`
      )
      .then((response) => {
        // Handle the response as needed
        console.log(response.data);
        toast.success("Nameservers updated successfully");
        // You can add further logic or error handling here
      })
      .catch((error) => {
        console.error("Error updating nameservers:", error);
        toast.error("Failed to update nameservers. Please try again.");
        // Handle the error here
      });
  };

  // CONTACT INFORMATION TAB SECTION
  const fetchContactInfo = async () => {
    try {
      const apiKey = "vqp3xslgRAouVzM";
      const registrantContactId = domain.registrantContactId.replace("OR_", "");

      const response = await axios.get(
        `https://api.connectreseller.com/ConnectReseller/ESHOP/ViewRegistrant?APIKey=${apiKey}&RegistrantContactId=${registrantContactId}`
      );

      if (response.data.responseMsg.statusCode === 200) {
        setContactInfo(response.data.responseData);
      } else {
        toast.error("Failed to fetch contact information");
      }
    } catch (error) {
      console.error("Error fetching contact information:", error);
      toast.error("Failed to fetch contact information");
    }
  };
  useEffect(() => {
    fetchContactInfo();
  }, []);

  // DNS Management TAB SECTION
  const fetchDnsRecords = async () => {
    try {
      const apiKey = "vqp3xslgRAouVzM";
      const websiteId = domain.websiteId;

      const response = await axios.get(
        `https://api.connectreseller.com/ConnectReseller/ESHOP/ViewDNSRecord?APIKey=${apiKey}&WebsiteId=${websiteId}`
      );

      if (response.data.responseMsg.statusCode === 200) {
        const records = response.data.responseData;
        // Organize records by type
        const organizedRecords = {};

        for (const record of records) {
          const recordType = record.recordType;
          if (!organizedRecords[recordType]) {
            organizedRecords[recordType] = [];
          }
          organizedRecords[recordType].push(record);
        }

        setDnsRecords(organizedRecords);
      } else {
        toast.error("Failed to fetch DNS records");
      }
    } catch (error) {
      console.error("Error fetching DNS records:", error);
      toast.error("Failed to fetch DNS records");
    }
  };
  useEffect(() => {
    fetchDnsRecords();
  }, []);

  return (
    <div className="domain-details bg-white p-4 rounded-lg ">
      <h1 className="domain-name-current-main text-2xl font-semibold">
        <span>{domain.websiteName}</span>
      </h1>
      <div className="domain-details-div">
        <div className="domain-detail-div">
          <div className="domain-detail-div-left">
            <MdOutlinePrivacyTip className="text-[35px] text-[#101c4c] md:mt-[5px]" />
          </div>

          <div className="domain-detail-div-right">
            {" "}
            <h1 className="text-base domain-detail-div-inner">
              Creation Date
              <br />{" "}
              <span className="domain-detail-inner-span">
                {new Date(domain.creationDate).toLocaleDateString()}
              </span>
            </h1>
          </div>
        </div>
        <div className="domain-detail-div">
          <div className="domain-detail-div-left">
            <FaRegClock className="text-[32px] md:mt-[8px] !text-[#d00000]" />
          </div>
          <div className="domain-detail-div-right">
            {" "}
            <h1 className="text-base domain-detail-div-inner">
              Expiration Date
              <br />{" "}
              <span className="domain-detail-inner-span">
                {new Date(domain.expirationDate).toLocaleDateString()}
              </span>
            </h1>
          </div>
        </div>
        <div className="domain-detail-div">
          <div className="domain-detail-div-left">
            <MdOutlinePrivacyTip className="text-[32px] md:mt-[8px] !text-[green]" />
          </div>
          <div className="domain-detail-div-right">
            {" "}
            <h1 className="text-base domain-detail-div-inner">
              Privacy Protection
              <br /> <span className="domain-detail-inner-span">Active</span>
            </h1>
          </div>
        </div>
      </div>

      <Tabs>
        <TabList className="domain-div-tabs">
          <Tab>Name Servers</Tab>
          <Tab>DNS Management</Tab> {/* Add an empty tab */}
          <Tab>Contact Information</Tab>
        </TabList>

        <TabPanel>
          <div className="nameservers-tab">
            <h1 className="nameserver-note">
              <span className="nameserver-note-span">Note:</span> Name Servers
              are used to point your Domain Name to your website or email
              service. We require that you maintain at least two Name Servers
              for your Domain Name.
            </h1>
            <div className="flex flex-col nameserver-tab">
              <label>NameServer 1</label>
              <input
                type="text"
                value={nameServer1}
                onChange={(e) => setNameServer1(e.target.value)}
                placeholder="NameServer 1"
                className="input-field border rounded p-2 w-full mb-2 name-server-input"
              />
            </div>
            <div className="flex flex-col nameserver-tab">
              <label>NameServer 2</label>
              <input
                type="text"
                value={nameServer2}
                onChange={(e) => setNameServer2(e.target.value)}
                placeholder="NameServer 2"
                className="input-field border rounded p-2 w-full mb-2 name-server-input"
              />
            </div>
            <div className="flex flex-col nameserver-tab">
              <label>NameServer 3</label>
              <input
                type="text"
                value={nameServer3}
                onChange={(e) => setNameServer3(e.target.value)}
                placeholder="NameServer 3"
                className="input-field border rounded p-2 w-full mb-2 name-server-input"
              />
            </div>
            <div className="flex flex-col nameserver-tab">
              <label>NameServer 4</label>
              <input
                type="text"
                value={nameServer4}
                onChange={(e) => setNameServer4(e.target.value)}
                placeholder="NameServer 4"
                className="input-field border rounded p-2 w-full mb-2 name-server-input"
              />
            </div>
          </div>
          <button
            onClick={handleUpdateNameservers}
            className="btn-primary py-2 px-4 mr-2 update-btn"
          >
            Update Nameservers
          </button>
        </TabPanel>

        <TabPanel>
          <DNSManagementTab
            dnsRecords={dnsRecords}
            mainDNS={domain.dnszoneId}
          />
        </TabPanel>
        <TabPanel>
          {contactInfo ? (
            <div className="registrant-contact">
              <p>
                Company Name <span>{contactInfo.companyName}</span>
              </p>
              <p>
                Name <span>{contactInfo.name}</span>
              </p>
              <p>
                Email Address <span>{contactInfo.emailAddress}</span>
              </p>
              <p>
                Address <span>{contactInfo.address1}</span>
              </p>
              <p>
                City <span>{contactInfo.city}</span>
              </p>
              <p>
                State <span>{contactInfo.stateName}</span>
              </p>
              <p>
                Country <span>{contactInfo.countryName}</span>
              </p>
              {/* Add more contact information fields as needed */}
            </div>
          ) : (
            <p>Loading contact information...</p>
          )}
        </TabPanel>
      </Tabs>

      {/* <button onClick={onClose} className="btn-secondary py-2 px-4 back-btn">
        Back to domains
      </button> */}
    </div>
  );
}

function DNSManagementTab({ dnsRecords, mainDNS }) {
  return (
    <div className="dns-management-tab">
      <h2 className="text-lg m-sbold mb-[10px] mt-[20px]">DNS Management</h2>
      <Tabs>
        <TabList className="flex space-x-4 dns-mgmt-tabs-list">
          <Tab className="dns-managment-inner-tab">A&nbsp;Record</Tab>
          <Tab className="dns-managment-inner-tab">AAAA&nbsp;Record</Tab>
          <Tab className="dns-managment-inner-tab">MX&nbsp;Records</Tab>
          <Tab className="dns-managment-inner-tab">CNAME&nbsp;Records</Tab>
          <Tab className="dns-managment-inner-tab">NS&nbsp;Records</Tab>
          <Tab className="dns-managment-inner-tab">TXT&nbsp;Records</Tab>
          <Tab className="dns-managment-inner-tab">SRV&nbsp;Records</Tab>
        </TabList>

        <TabPanel>
          <AddDNSRecordForm dnszoneID={mainDNS} selectedTab="A" />
          <DNSRecordSection type="A" records={dnsRecords.A || []} />
        </TabPanel>
        <TabPanel>
          <AddDNSRecordForm dnszoneID={mainDNS} selectedTab="AAAA" />
          <DNSRecordSection type="AAAA" records={dnsRecords.AAAA || []} />
        </TabPanel>
        <TabPanel>
          <AddDNSRecordForm dnszoneID={mainDNS} selectedTab="MX" />
          <DNSRecordSection type="MX" records={dnsRecords.MX || []} />
        </TabPanel>
        <TabPanel>
          <AddDNSRecordForm dnszoneID={mainDNS} selectedTab="CNAME" />
          <DNSRecordSection type="CNAME" records={dnsRecords.CNAME || []} />
        </TabPanel>
        <TabPanel>
          <AddDNSRecordForm dnszoneID={mainDNS} selectedTab="NS" />
          <DNSRecordSection type="NS" records={dnsRecords.NS || []} />
        </TabPanel>
        <TabPanel>
          <AddDNSRecordForm dnszoneID={mainDNS} selectedTab="TXT" />
          <DNSRecordSection type="TXT" records={dnsRecords.TXT || []} />
        </TabPanel>
        <TabPanel>
          <AddDNSRecordForm dnszoneID={mainDNS} selectedTab="SRV" />
          <DNSRecordSection type="SRV" records={dnsRecords.SRV || []} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

function DNSRecordSection({ type, records }) {
  const [editedRecords, setEditedRecords] = useState({});
  const apiKey = "vqp3xslgRAouVzM";
  const handleDeleteRecord = (dnszoneRecordID, dnszoneID) => {
    // Make an API request to delete the DNS record using the provided API endpoint
    axios
      .get(
        `https://api.connectreseller.com/ConnectReseller/ESHOP/DeleteDNSRecord?APIKey=${apiKey}&DNSZoneID=${dnszoneID}&DNSZoneRecordID=${dnszoneRecordID}&RecordType=${type}`
      )
      .then((response) => {
        // Handle the response as needed
        console.log(response.data);
        toast.success("DNS record deleted successfully");
        // You can add further logic or error handling here
      })
      .catch((error) => {
        console.error("Error deleting DNS record:", error);
        toast.error("Failed to delete DNS record. Please try again.");
        // Handle the error here
      });
  };

  const updateDNSRecord = (dnszoneRecordID, dnszoneID) => {
    const recordData = editedRecords[dnszoneRecordID];
    if (!recordData) {
      toast.error("No changes to update.");
      return;
    }

    const { RecordName, RecordType, RecordValue, RecordTTL } = recordData;

    axios
      .get(
        `https://api.connectreseller.com/ConnectReseller/ESHOP/ModifyDNSRecord?APIKey=${apiKey}&DNSZoneID=${dnszoneID}&DNSZoneRecordID=${dnszoneRecordID}&RecordName=${RecordName}&RecordType=${RecordType}&RecordValue=${RecordValue}&RecordTTL=${RecordTTL}`
      )
      .then((response) => {
        console.log(response.data);
        toast.success("DNS record updated successfully");
        // Optionally, you can reset the editedRecords state here.
      })
      .catch((error) => {
        console.error("Error updating DNS record:", error);
        toast.error("Failed to update DNS record. Please try again.");
      });
  };

  const handleInputChange = (dnszoneRecordID, field, value) => {
    setEditedRecords((prevEditedRecords) => ({
      ...prevEditedRecords,
      [dnszoneRecordID]: {
        ...prevEditedRecords[dnszoneRecordID],
        [field]: value,
        // Preserve previous values for other fields
        RecordName: prevEditedRecords[dnszoneRecordID]?.RecordName || "",
        RecordType: prevEditedRecords[dnszoneRecordID]?.RecordType || "",
        RecordValue: prevEditedRecords[dnszoneRecordID]?.RecordValue || "",
        RecordTTL: prevEditedRecords[dnszoneRecordID]?.RecordTTL || "",
      },
    }));
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2 m-sbold">{type} Records</h3>
      <table className="w-full border border-collapse records-table-dns">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Content</th>
            <th className="border px-4 py-2">TTL</th>
            <th className="border px-4 py-2">Delete Record</th>
            <th className="border px-4 py-2">Update</th>
            {/* Add more table headers as needed */}
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.dnszoneRecordID}>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  value={
                    editedRecords[record.dnszoneRecordID]?.recordName ||
                    record.recordName
                  }
                  onChange={(e) =>
                    handleInputChange(
                      record.dnszoneRecordID,
                      "recordName",
                      e.target.value
                    )
                  }
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  value={
                    editedRecords[record.dnszoneRecordID]?.RecordValue ||
                    record.recordContent
                  }
                  onChange={(e) =>
                    handleInputChange(
                      record.dnszoneRecordID,
                      "RecordValue",
                      e.target.value
                    )
                  }
                />
              </td>
              <td className="border px-4 py-2">
                <input
                  type="text"
                  value={
                    editedRecords[record.dnszoneRecordID]?.RecordTTL ||
                    record.recordTTL
                  }
                  onChange={(e) =>
                    handleInputChange(
                      record.dnszoneRecordID,
                      "RecordTTL",
                      e.target.value
                    )
                  }
                />
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() =>
                    handleDeleteRecord(record.dnszoneRecordID, record.dnszoneID)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
              <td className="border px-4 py-2">
                <button
                  onClick={() =>
                    updateDNSRecord(record.dnszoneRecordID, record.dnszoneID)
                  }
                  className="bg-[#101c4c] hover:bg-blue-600 text-white px-2 py-1 rounded"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add input fields and buttons for updating DNS records if necessary */}
    </div>
  );
}

function AddDNSRecordForm({ dnszoneID, selectedTab }) {
  const [newRecord, setNewRecord] = useState({
    RecordName: "",
    RecordType: selectedTab, // Automatically set the record type based on the selected tab
    RecordValue: "",
    RecordTTL: "43200",
    RecordPriority: "0",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecord({
      ...newRecord,
      [name]: value,
    });
  };

  const handleAddRecord = () => {
    // Make an API request to add the DNS record using the provided API endpoint
    const apiKey = "vqp3xslgRAouVzM";
    const { RecordName, RecordType, RecordValue, RecordPriority, RecordTTL } =
      newRecord;

    axios
      .get(
        `https://api.connectreseller.com/ConnectReseller/ESHOP/AddDNSRecord?APIKey=${apiKey}&DNSZoneID=${dnszoneID}&RecordName=${RecordName}&RecordType=${RecordType}&RecordValue=${RecordValue}&RecordPriority=${RecordPriority}&RecordTTL=${RecordTTL}`
      )
      .then((response) => {
        // Handle the response as needed
        console.log(response.data);
        toast.success("DNS record added successfully");
        // You can add further logic or error handling here
        // Optionally, clear the form fields
        setNewRecord({
          RecordName: "",
          RecordType: selectedTab,
          RecordValue: "",
          RecordTTL: "43200",
          RecordPriority: "0",
        });
      })
      .catch((error) => {
        console.error("Error adding DNS record:", error);
        toast.error("Failed to add DNS record. Please try again.");
        // Handle the error here
      });
  };

  return (
    <div>
      <h3 className="text-lg font-semibold m-sbold mt-[30px] mb-2">
        Add New {selectedTab} DNS Record
      </h3>
      <form className="!m-0">
        <div className="flex mb-[5px]">
          <input
            type="text"
            name="RecordName"
            value={newRecord.RecordName}
            onChange={handleInputChange}
            placeholder="Record Name"
            className="border px-4 py-2 mr-4 add-record-input"
          />
          <input
            type="text"
            name="RecordValue"
            value={newRecord.RecordValue}
            onChange={handleInputChange}
            placeholder="Record Value"
            className="border px-4 py-2 mr-4 add-record-input"
          />
          <input
            type="text"
            name="RecordTTL"
            value={newRecord.RecordTTL}
            onChange={handleInputChange}
            placeholder="TTL"
            className="border px-4 py-2 mr-4 add-record-input"
          />
          <button
            type="button"
            onClick={handleAddRecord}
            className="add-record-btn"
          >
            Add&nbsp;Record
          </button>
        </div>
      </form>
    </div>
  );
}

export default DomainDetails;
