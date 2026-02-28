import React, { useState } from "react";
import { FiChevronDown, FiDownload, FiFileText, FiCheckCircle } from "react-icons/fi";

const PolicyBrochure = () => {
  const countries = [
    // Future Generali Start
    {
      name: "FUTURE GENERALI INDIA INSURANCE CO. LTD.",
      states: [
        {
          name: "HEALTH",
          cities: [
            {
              name: "FG HEALTH TOTAL",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `This Policy provides You options of 3 (three) plans namely Vital Plan, Superior Plan and Premiere Plan with each Plan having further Sum Insured options as specified in the Schedule of Benefits. The Schedule will specify the Sum Insured and the Plan which is in force for each of the Insured Persons. For a complete description of the benefits available under the applicable Plan as well as any specific limits on the amount payable under any particular benefit under the applicable Sum Insured and Plan, please refer to the "Schedule of Benefits" attached to this Policy.`,
                benefits: `The Policy covers the Reasonable and Customary Charges incurred towards the medical treatment taken by the Insured Person during the Policy Period following an Illness or Injury that occurs during the Policy Period, subject always to the availability of the Sum Insured and any specific limits specified in the Schedule of Benefits and the terms, conditions and exclusions specified in this Policy document.`,
                subProducts: [
                  "Cashless Treatment",
                  "No Claim Bonus",
                  "Tax Benefits",
                ],
                heading: "FG HEALTH TOTAL",
                policyWordingUrl: "/pdfs/Future/healthtotalwordings.pdf",
                brochureUrl: "/pdfs/Future/healthtotalbrochure.pdf",
              },
            },
            {
              name: "FG HEALTH ABSOLUTE",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example2",
                description: `This Policy provides You options of 3 (three) plans namely Classic, Platinum, Signature. Each plan has various Sum Insured options as specified in the Schedule of Benefits. The schedule will specify the Sum Insured and the plan which is in force for the Insured Persons. For a complete description of the benefits available, please refer to the "Schedule of Benefits" attached to this Policy`,
                benefits: `This Policy covers the Reasonable and Customary Charges incurred towards the medical treatment taken by the Insured Person following an Illness or Injury that occurs during the Policy Period, subject to the availability of the Sum Insured, any sub-limits specified in the Schedule of Benefits and the terms, conditions and exclusions specified in this Policy document`,
                subProducts: ["Affordable Premium", "Wide Network"],
                heading: "FG HEALTH ABSOLUTE",
                policyWordingUrl: "/pdfs/Future/fghealthabsolutepolicywordings.pdf",
                brochureUrl: "/pdfs/Future/fghealthabsolutebrochure.pdf",
              },
            },
            {
              name: "FG HEALTH SURAKSHA",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example2",
                description: `This Policy is issued to You based on Your Proposal to Us and Your payment of the Premium. You are eligible to enter this Policy if Your age is between 90 days to 70 years with lifelong renewability. This Policy records the agreement between Us and sets out the terms of insurance and the obligations of each party.`,
                benefits: `Available for persons above 60 years, We shall provide payment for the nursing charges by a qualified nurse if necessary and recommended by the treating physician immediately after discharge from the Hospital, up to the amount specified in the Schedule of Benefits, up to a maximum of 10 days per Hospitalization subject to maximum of 30 days during the Policy Year. This cover is over and above the Hospitalization sum insured.`,
                subProducts: ["Affordable Premium", "Wide Network"],
                heading: "FG HEALTH SURAKSHA",
                policyWordingUrl: "/pdfs/Future/healthsurakshapolicywordings.pdf",
                brochureUrl: "/pdfs/Future/healthsurakshabrochure.pdf",
              },
            },
          ],
        },
        {
          name: "INDIVIDUAL PERSONAL ACCIDENT [IPA]",
          cities: [
            {
              name: "FG ACCIDENT SURAKSHA",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `This Policy is issued to You based on the Disclosure to information norm, Your Proposal to Us and Your payment of the Premium. This Policy records the agreement between Us and You and sets out the terms of insurance and the obligations of each party.`,
                benefits: `The insured person will have the option to migrate the policy to other health insurance products/plans offered by the company by applying for migration of the policy at least 30 days before the policy renewal date as per IRDAI guidelines on Migration.`,
                subProducts: [
                  "Cashless Treatment",
                  "No Claim Bonus",
                  "Tax Benefits",
                ],
                heading: "FG ACCIDENT SURAKSHA",
                policyWordingUrl: "/pdfs/Future/accidentsurakshapolicywordings.pdf",
                brochureUrl: "/pdfs/Future/accidentsurakshabrochure.pdf",
              },
            },
          ],
        },
        {
          name: "TRAVEL & OVERSEAS",
          cities: [
            {
              name: "TRAVEL SURAKSHA",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `This Policy is issued to you based on your Proposal to us and payment of the Premium. You are eligible to be covered under this policy if your age is between 6 months to 80 years. This Policy records the agreement between us and you, and sets out the terms of insurance and obligations of each party.`,
                benefits: `Cashless Claim Settlement, Claims turnaround time of fourteen working days, Worldwide Emergency, Medical and Travel Assistance Services, Ease and convenience of purchase, Child escort benefit, Cover extension in india, up to 90 days for medical expenses on evacuation, Reimbursement of claims as per policy terms and conditions, Worldwide Service Provider, Flexibility of choosing a Travel Insurance Plan as per your need, Instant Policy issuance, Specially designed plan for senior citizens (i.e. 71 - 80 years of age)`,
                subProducts: [
                  "Cashless Treatment",
                  "No Claim Bonus",
                  "Tax Benefits",
                ],
                heading: "TRAVEL SURAKSHA",
                policyWordingUrl: "/pdfs/Future/futuretravelsurakshapolicywordings.pdf",
                brochureUrl: "/pdfs/Future/futuretravelsurakshaworldwideebrochure.pdf",
              },
            },
          ],
        },
      ],
    },
    // Care Health Start
    {
      name: "CARE HEALTH INSURANCE CO. LTD.",
      states: [
        {
          name: "HEALTH",
          cities: [
            {
              name: "CARE SUPREME",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `The proposal and declaration given by the proposer and other documents if any shall form the basis of this Contract and is deemed to be incorporated herein. The two parties to this contract are the Policy Holder/Insured/Insured Persons (also referred as You) and Care Health Insurance Limited (also referred as Company/ We/Us), and all the Provisions of Indian Contract Act, 1872, shall hold good in this regard.`,
                benefits: `The Insured Person will have the option to migrate the policy to other health insurance products/plans offered by the Company by applying for migration of the policy at least 30 days before the policy renewal date as per IRDAI guidelines on Migration. If such person is presently covered and has been continuously covered without any lapses under any health insurance product/plan offered by the Company, the Insured Person will get the accrued continuity benefits as per IRDAI guidelines on migration`,
                subProducts: [
                  "Cashless Treatment",
                  "No Claim Bonus",
                  "Tax Benefits",
                ],
                heading: "CARE SUPREME",
                policyWordingUrl: "/pdfs/Care/CareSupremePolicywording.pdf",
                brochureUrl: "/pdfs/Care/CareSupremeBrochure.pdf",
              },
            },
            {
              name: "CARE ADVANTAGE",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `The proposal and declaration given by the proposer and other documents if any shall form the basis of this Contract and is deemed to be incorporated herein. The two parties to this contract are the Policy Holder/Insured/Insured Persons (also referred as You) and Care Health Insurance Limited (also referred as Company/ We/Us).`,
                benefits: `The insured person will have the option to port the policy to other insurers by applying to such insurer to port the entire policy along with all the members of the family, if any, at least 30 days before, but not earlier than 60 days from the policy renewal date as per IRDAI guidelines related to portability.`,
                subProducts: [
                  "Cashless Treatment",
                  "No Claim Bonus",
                  "Tax Benefits",
                ],
                heading: "CARE ADVANTAGE",
                policyWordingUrl: "/pdfs/Care/CareAdvantagePolicywording.pdf",
                brochureUrl: "/pdfs/Care/CareAdvantageBrochure.pdf",
              },
            },
          ],
        },
      ],
    },
    // HDFC Ergo Start
    {
      name: "HDFC ERGO GENERAL INSURANCE COMPANY LIMITED",
      states: [
        {
          name: "HEALTH",
          cities: [
            {
              name: "OPTIMA RESTORE",
              details: {
                youtubeLink: "https://www.youtube.com/embed/vXcEL9r3Roo",
                description: `This Policy is a contract of insurance issued by HDFC ERGO General Insurance Company Limited (hereinafter called the 'Company') to the proposer mentioned in the Policy Schedule (hereinafter called the 'Policyholder') to cover the person(s) named in the Policy Schedule (hereinafter called the 'Insured Person(s)').`,
                benefits: `The Insured Person will have the option to port the Policy to other insurers by applying to such Insurer to port the entire policy along with all the members of the family, if any, at least 45 days before, but not earlier than 60 days from the policy renewal date as per IRDAI guidelines related to Portability.`,
                subProducts: [
                  "Cashless Treatment",
                  "No Claim Bonus",
                  "Tax Benefits",
                ],
                heading: "OPTIMA RESTORE",
                policyWordingUrl: "/pdfs/HDFC/Optima+Restore-Policy+Wording.pdf",
                brochureUrl: "/pdfs/HDFC/Optima+Restore-Brochure.pdf",
              },
            },
            {
              name: "OPTIMA SECURE",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `This Policy is a contract of insurance issued by HDFC ERGO General Insurance Company Limited (hereinafter called the 'Company') to the proposer mentioned in the Policy Schedule (hereinafter called the 'Policyholder') to cover the person(s) named in the Policy Schedule.`,
                benefits: `The Insured Person will have the option to port the Policy to other insurers by applying to such Insurer to port the entire policy along with all the members of the family, if any, at least 45 days before, but not earlier than 60 days from the policy renewal date as per IRDAI guidelines related to Portability.`,
                subProducts: [
                  "Cashless Treatment",
                  "No Claim Bonus",
                  "Tax Benefits",
                ],
                heading: "OPTIMA SECURE",
                policyWordingUrl: "/pdfs/HDFC/OptimaSecurePolicywording.pdf",
                brochureUrl: "/pdfs/HDFC/OptimaSecureBrochure.pdf",
              },
            },
          ],
        },
      ],
    },
  ];

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const changeCountry = (event) => {
    setCountry(event.target.value);
    const selectedCountry = countries.find(
      (ctr) => ctr.name === event.target.value
    );
    setStates(selectedCountry?.states || []);
    setState("");
    setCities([]);
    setCity("");
    setSelectedProduct(null);
  };

  const changeState = (event) => {
    setState(event.target.value);
    const selectedState = states.find((st) => st.name === event.target.value);
    setCities(selectedState?.cities || []);
    setCity("");
    setSelectedProduct(null);
  };

  const changeCity = (event) => {
    setCity(event.target.value);
    const selectedCity = cities.find((ct) => ct.name === event.target.value);
    setSelectedProduct(selectedCity?.details || null);
  };

  return (
    <section className="policy-brochure">
      <div className="policy-brochure__heading">
        <h2>Our Brochure</h2>
        <span className="heading-line"></span>
      </div>

      <div className="policy-brochure__wrapper">
        {/* FILTER BAR */}
        <div className="policy-brochure__filters">
          <div className="policy-select-wrapper">
            <label htmlFor="company-select">Select Company</label>
            <select 
              id="company-select"
              value={country} 
              onChange={changeCountry}
            >
              <option value="">Choose a company...</option>
              {countries.map((ctr) => (
                <option key={ctr.name} value={ctr.name}>
                  {ctr.name}
                </option>
              ))}
            </select>
            <FiChevronDown className="select-icon" />
          </div>

          <div className="policy-select-wrapper">
            <label htmlFor="type-select">Insurance Type</label>
            <select 
              id="type-select"
              value={state} 
              onChange={changeState}
              disabled={!country}
            >
              <option value="">Select insurance type...</option>
              {states.map((st) => (
                <option key={st.name} value={st.name}>
                  {st.name}
                </option>
              ))}
            </select>
            <FiChevronDown className="select-icon" />
          </div>

          <div className="policy-select-wrapper">
            <label htmlFor="policy-select">Select Policy</label>
            <select 
              id="policy-select"
              value={city} 
              onChange={changeCity}
              disabled={!state}
            >
              <option value="">Choose a policy...</option>
              {cities.map((ct) => (
                <option key={ct.name} value={ct.name}>
                  {ct.name}
                </option>
              ))}
            </select>
            <FiChevronDown className="select-icon" />
          </div>
        </div>

        {/* POLICY CARD */}
        {selectedProduct && (
          <div className="policy-card">
            {/* Card Header */}
            <div className="policy-card-header">
              <div className="policy-card-header__badge">
                <FiFileText style={{ display: 'inline', marginRight: '5px' }} />
                POLICY DOCUMENTATION
              </div>
              <h2 className="policy-title">{selectedProduct.heading}</h2>
            </div>

            {/* Card Content */}
            <div className="policy-content">
              {/* Preamble Section */}
              <div className="policy-content-section">
                <h3 className="policy-section-title">Policy Overview</h3>
                <p>{selectedProduct.description}</p>
              </div>

              {/* Benefits Section */}
              <div className="policy-content-section">
                <h3 className="policy-section-title">Key Benefits</h3>
                <p>{selectedProduct.benefits}</p>
              </div>

              {/* Features Section */}
              <div className="policy-content-section">
                <h3 className="policy-section-title">Product Features</h3>
                <div className="policy-features">
                  {selectedProduct.subProducts.map((feature, idx) => (
                    <div key={idx} className="policy-feature-item">
                      <FiCheckCircle className="feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Section */}
              <div className="policy-download-section">
                <div className="download-header">
                  <div className="download-icon-box">
                    <FiDownload />
                  </div>
                  <div className="download-header-text">
                    <h3>Download Policy Documents</h3>
                    <p>Access complete policy details and brochures</p>
                  </div>
                </div>

                <div className="download-cards-grid">
                  <a
                    href={selectedProduct.policyWordingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-card card-primary"
                  >
                    <div className="download-card-content">
                      <div className="download-card-icon">
                        <FiFileText />
                      </div>
                      <div className="download-card-text">
                        <h4>Policy Wording</h4>
                        <p>Complete terms & conditions</p>
                      </div>
                    </div>
                    <FiDownload className="download-arrow" />
                  </a>

                  <a
                    href={selectedProduct.brochureUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-card card-secondary"
                  >
                    <div className="download-card-content">
                      <div className="download-card-icon">
                        <FiFileText />
                      </div>
                      <div className="download-card-text">
                        <h4>Policy Brochure</h4>
                        <p>Quick reference guide</p>
                      </div>
                    </div>
                    <FiDownload className="download-arrow" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* EMPTY STATE */}
        {!selectedProduct && (
          <div className="policy-empty-state">
            <div className="empty-state-icon">
              <FiFileText />
            </div>
            <h3>Select a Policy to View Details</h3>
            <p>
              Choose a company, insurance type, and policy from the filters above 
              to view comprehensive policy information and download brochures.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PolicyBrochure;