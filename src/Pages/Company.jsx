import React, { useEffect, useState } from "react";
import FG from "../IMG/Company/FG.svg"
import first from "../IMG/Company/first.gif"
import TATAAIG from "../IMG/Company/TATAAIG.svg"
import HDFCERGO from "../IMG/Company/HDFCERGO.svg"
import LICLOGO from "../IMG/Company/LICLOGO.svg"
import CARE from "../IMG/Company/CARE.svg"
import ICICIlombard from "../IMG/Company/ICICIlombard.svg"
import IFFCO from "../IMG/Company/IFFCO.svg"
import NIVBHUPA from "../IMG/Company/NIVBHUPA.svg"


import WhatsAppBtnn from ".///../IMG/WhatsAppBtnn.png"

function Company() {

  const countries = [

    // fg Start
    {
      name: "FUTURE GENRALI INDIA INSURANCE CO. LTD.",
      states: [
        {
          name: "HEALTH",
          cities: [
            {
              name: "FG HEALTH TOTAL",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: ` This Policy provides You options of 3 (three) plans namely Vital Plan, Superior Plan and Premiere
Plan with each Plan having further Sum Insured options as specified in the Schedule of Benefits. The Schedule will
specify the Sum Insured and the Plan which is in force for each of the Insured Persons. For a complete description
of the benefits available under the applicable Plan as well as any specific limits on the amount payable under any
particular benefit under the applicable Sum Insured and Plan, please refer to the “Schedule of Benefits” attached
to this Policy.`,
                benefits: `The Policy covers the Reasonable and Customary Charges incurred towards the medical treatment taken
by the Insured Person during the Policy Period following an Illness or Injury that occurs during the Policy Period,
subject always to the availability of the Sum Insured and any specific limits specified in the Schedule of Benefits and
the terms, conditions and exclusions specified in this Policy document.`,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "FG HEALTH TOTAL",
                policyWordingUrl: "/pdfs/Future/healthtotalwordings.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Future/healthtotalbrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "FG HEALTH ABSOLUTE",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example2",
                description: `This Policy provides You options of 3 (three) plans namely Classic, Platinum, Signature. Each plan has various
Sum Insured options as specified in the Schedule of Benefits. The schedule will specify the Sum Insured and the plan which is
in force for the Insured Persons. For a complete description of the benefits available, please refer to the “Schedule of Benefits”
attached to this Policy`,
                benefits: ` This Policy covers the Reasonable and Customary Charges incurred towards the medical treatment taken by the
Insured Person following an Illness or Injury that occurs during the Policy Period, subject to the availability of the Sum Insured,
any sub-limits specified in the Schedule of Benefits and the terms, conditions and exclusions specified in this Policy document`,
                subProducts: ["Affordable Premium", "Wide Network"],
                heading: "FG HEALTH ABSOLUTE",
                policyWordingUrl: "/pdfs/Future/fghealthabsolutepolicywordings.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Future/fghealthabsolutebrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "FG HEALTH SURAKSHA",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example2",
                description: `This Policy is issued to You based on Your Proposal to Us and Your payment of the Premium. You are eligible to enter this Policy if Your age is
between 90 days to 70 years with lifelong renewability. This Policy records the agreement between Us and sets out the terms of insurance and the
obligations of each party. 
`,
                benefits: `Available for persons above 60 years, We shall provide payment for the nursing charges by a qualified nurse if necessary and
recommended by the treating physician immediately after discharge from the Hospital, up to the amount specified in the Schedule of Benefits,
up to a maximum of 10 days per Hospitalization subject to maximum of 30 days during the Policy Year. This cover is over and above the
Hospitalization sum insured.`,
                subProducts: ["Affordable Premium", "Wide Network"],
                heading: "FG HEALTH SURAKSHA",
                policyWordingUrl: "/pdfs/Future/healthsurakshapolicywordings.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Future/healthsurakshabrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "FG ADVANTAGE TOP UP",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example2",
                description: `
This Policy has been issued to You based on the questions in Your Proposal to Us and the Disclosure to information norm which form a part 
of the Policy and on the receipt of premium due. 
This Policy covers eligible Insured Persons of all ages and may continue to be renewed throughout the life of the Insured Persons. 
This Policy records the agreement between You and Us and sets out the terms, conditions and exclusions applicable under this Policy as 
well as the obligations of You, Us, the Insured Persons and claimants.  `,
                benefits: `The insured person will have the option to port the policy to other insurers by applying to such insurer to port the entire policy along 
with all the members of the family, if any, at least 45 days before, but not earlier than 60 days from the policy renewal date as per 
IRDAI guidelines related to portability. lf such person is presently covered and has been continuously covered without any lapses 
under any health insurance policy with an lndian General/Health insurer, the proposed insured person will get the accrued continuity 
benefits in waiting periods as per IRDAI guidelines on portability. `,
                subProducts: ["Affordable Premium", "Wide Network"],
                heading: "FG ADVANTAGE TOP UP",
                policyWordingUrl: "/pdfs/Future/futureadvantagetopuppolicywordings.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Future/futureadvantagetopupbrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "FG VARISHTHA BIMA",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example2",
                description: `This Policy is issued to You based on Your Proposal and declarations together/ followed by, with any other documents to Us and Your payment
of the premium on behalf of you and the persons to be insured. This Policy records the contract between Us and You and/or any Insured Person and
sets out the terms of insurance and the obligations of each party. Now this contract witnesses to the definitions terms, conditions and exclusions
contained herein, or endorsed or otherwise expressed hereon and sets out as stated in Schedule of this policy/contract to the said Insured Person/s
claiming payment or upon the happening of an event upon which one or more benefits become payable under the sum insured as stated in the Schedule.`,
                benefits:`The insured person will have the option to port the policy to other insurers by applying to such insurer to port the entire policy along with all the
members of the family, if any, at least 45 days before, but not earlier than 60 days from the policy renewal date as per IRDAI guidelines related
to portability. lf such person is presently covered and has been continuously covered without any lapses under any health insurance policy with
an lndian General/ Health insurer, the proposed insured person will get the accrued continuity benefits in waiting periods as per IRDAI
guidelines on portability.`,
                subProducts: ["Affordable Premium", "Wide Network"],
                heading: "FG VARISHTHA BIMA",
                policyWordingUrl: "/pdfs/Future/futurevarishtabimapolicywordings.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Future/futurevaristhabimabrochure.pdf", // Replace with the actual URL
              },
            },
          ],
        },
        {
          name: "INDIVIDUAL PERSONAL ACCIDENT [IPA]",
          cities: [
            {
              name: "FG ACCIDENT SURAKSHA ",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `This Policy is issued to You based on the Disclosure to information norm, Your Proposal to Us and Your payment of the Premium. This 
Policy records the agreement between Us and You and sets out the terms of insurance and the obligations of each party. `,
                benefits:`he insured person will have the option to migrate the policy to other health insurance products/plans offered by the company by applying for 
migration of the policy at least 30 days before the policy renewal date as per IRDAI guidelines on Migration. lf such person is presently covered 
and has been continuously covered without any lapses under any health insurance product/plan offered by the company, the insured person will 
get all the accrued continuity benefits in waiting periods as per the IRDAI guidelines on migration.  `,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "FG ACCIDENT SURAKSHA",
                policyWordingUrl: "/pdfs/Future/accidentsurakshapolicywordings.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Future/accidentsurakshabrochure.pdf", // Replace with the actual URL
              },
            },
          ],
        },
        {
          name: "TRAVEL & OVERSEAS",
          cities: [
            {
              name: "TRAVEL SURKSHA",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `This Policy is issued to you based on your Proposal to us and payment of the Premium. You are eligible to be covered under this policy if your age is
between 6 months to 80 years. This Policy records the agreement between us and you, and sets out the terms of insurance and obligations of each
party.`,        
                benefits: ` Cashless Claim Settlement, Claims turnaround time of fourteen working days, Worldwide Emergency, Medical and Travel Assistance Services, Ease and convenience of purchase, Child escort benefit, Cover extension in india, up to 90 days for medical expenses on evacuation, Reimbursement of claims as per policy terms and conditions, Worldwide Service Provider, Flaxibility of choosing a Travel Insurance Plan as per your need, Instant Policy issuance, Specially designed plan for senior citizens (i.e. 71 - 80 years of age)  `,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "FG HEALTH TOTAL",
                policyWordingUrl: "/pdfs/Future/futuretravelsurakshapolicywordings.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Future/futuretravelsurakshaworldwideebrochure.pdf", // Replace with the actual URL
              },
            },
          ],
        },
      ],
    },
    // Fg end
    // care start
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
                description: `The proposal and declaration given by the proposer and other documents if any shall form the basis of this Contract and is deemed to be incorporated herein. The two parties to this contract are the Policy Holder/Insured/Insured Persons (also referred as You) and Care Health Insurance Limited (also referred as Company/ We/Us), and all the Provisions of Indian Contract Act, 1872, shall hold good in this regard. The references to the singular include references to the plural; references to the male include the references to the female; and references to any statutory enactment include subsequent changes to the same and vice versa. The sentence construction and wordings in the Policy documents should be taken in its true sense and should not be taken in a way so as to take advantage of the Company by filing a claim which deviates from the purpose of Insurance.`,
                 benefits:`The Insured Person will have the option to migrate the policy to other health insurance products/plans offered by the Company by applying for migration of the policy at least 30 days before the policy renewal date as per IRDAI guidelines on Migration. If such person is presently covered and has been continuously covered without any lapses under any health insurance product/plan offered by the Company, the Insured Person will get the accrued continuity benefits as per IRDAI guidelines on migration`,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "CARE SUPREME",
                policyWordingUrl: "/pdfs/Care/CareSupremePolicywording.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Care/CareSupremeBrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "CARE ADVANTAGE",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `The proposal and declaration given by the proposer and other documents if any shall form the basis of this Contract and is deemed to be incorporated herein. The two parties to this contract are the Policy Holder/Insured/Insured Persons (also referred as You) and Care Health Insurance Limited (also referred as Company/ We/Us), and all the Provisions of Indian Contract Act, 1872, shall hold good in this regard. The references to the singular include references to the plural; references to the male include the references to the female; and references to any statutory enactment include subsequent changes to the same and vice versa. The sentence construction and wordings in the Policy documents should be taken in its true sense and should not be taken in a way so as to take advantage of the Company by filing a claim which deviates from the purpose of Insurance.`,
                benefits: `The insured person will have the option to port the policy to other insurers by applying to such insurer to port the entire policy along with all the members of the family, if any, at least 30 days before, but not earlier than 60 days from the policy renewal date as per IRDAI guidelines related to portability. If such person is presently covered and has been continuously covered without any lapses under any health insurance policy with an indian General/Health insurer, the proposed insured person will get the accrued continuity benefits as per IRDAI guidelines on portability.`,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "CARE ADVANTAGE",
                policyWordingUrl: "/pdfs/Care/CareAdvantagePolicywording.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Care/CareAdvantageBrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "CARE FREEDOM",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `The proposal and declaration given by the proposer and other documents if any shall form the basis of this Contract and is deemed to be incorporated herein. The two parties to this contract are the Policy Holder/Insured/Insured Persons (also referred as You) and Care Health Insurance Limited (also referred as Company/ We/Us), and all the Provisions of Indian Contract Act, 1872, shall hold good in this regard. The references to the singular include references to the plural; references to the male include the references to the female; and references to any statutory enactment include subsequent changes to the same and vice versa. The sentence construction and wordings in the Policy documents should be taken in its true sense and should not be taken in a way so as to take advantage of the Company by filing a claim which deviates from the purpose of Insurance.`,
                benefits: `The insured person will have the option to migrate the
policy to other health insurance products/plans offered
by the company by applying for migration of the policy
atleast 30 days before the policy renewal date as per
IRDAI guidelines on Migration. lf such person is
presently covered and has been continuously covered
without any lapses under any health insurance
product/plan offered by the company, the insured
person will get the accrued continuity benefits as per
IRDAI guidelines on migration`,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "CARE FREEDOM",
                policyWordingUrl: "/pdfs/Care/CareFreedomPolicywording.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Care/CareFreedomBrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "CARE",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description:`The proposal and declaration given by the proposer and other documents if any shall form the basis of this Contract and is deemed to be incorporated herein. The two parties to this contract are the Policy Holder/Insured/Insured Persons (also referred as You) and Care Health Insurance Limited (also referred as Company/ We/Us), and all the Provisions of Indian Contract Act, 1872, shall hold good in this regard. The references to the singular include references to the plural; references to the male include the references to the female; and references to any statutory enactment include subsequent changes to the same and vice versa. The sentence construction and wordings in the Policy documents should be taken in its true sense and should not be taken in a way so as to take advantage of the Company by filing a claim which deviates from the purpose of Insurance.`,
                benefits:`Any Claim paid for Benefits namely Benefit 1
(Hospitalization Expenses), Benefit 2 (Pre
Hospitalization Medical Expenses and Post
Hospitalization Medical Expenses), Benefit 3
(Daily Allowance), Benefit 4 (Ambulance
Cover), Benefit 5 (Organ Donor Cover), Benefit 6
(Domiciliary Hospitalization), Benefit 9
(AYUSH Treatments), Benefit 11 (Global
coverage (excluding U.S.A.), Benefit 13
(Vaccination Cover), Benefit 14 (Care
Anywhere), Benefit 15 (Maternity cover) and
Optional Covers namely Optional Cover 1
(Global Coverage – Total), Optional Cover 7
(Smart Select), Optional Cover 13 (Extension of
Global Coverage), and Optional Cover 14 (Air
Ambulance Cover), shall reduce the Total Sum
Insured for the Policy Year and only the balance
shall be available for all the future claims for that
Policy Year.`,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "CARE",
                policyWordingUrl: "/pdfs/Care/CarePolicywording.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Care/CareBrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "CARE PLUS YOUTH PLAN",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `The proposal and declaration given by the proposer and other documents if any shall form the basis of this Contract and is deemed to be incorporated herein. The two parties to this contract are the Policy Holder/Insured/Insured Persons (also referred as You) and Care Health Insurance Limited (also referred as Company/ We/Us), and all the Provisions of Indian Contract Act, 1872, shall hold good in this regard. The references to the singular include references to the plural; references to the male include the references to the female; and references to any statutory enactment include subsequent changes to the same and vice versa. The sentence construction and wordings in the Policy documents should be taken in its true sense and should not be taken in a way so as to take advantage of the Company by filing a claim which deviates from the purpose of Insurance.`,
                benefits: `The insured person will have the option to port the policy 
 to other insurers by applying to such insurer to port the 
 entire policy along with all the members of the family, if 
 any, at least 30 days before, but not earlier than 60 days 
 from the policy renewal date as per IRDAI guidelines  
 related to portability. lf such person is presently covered 
 and has been continuously covered without any lapses 
 under any health insurance policy with an Indian  
 General/Health insurer, the proposed insured person will 
 get the accrued continuity benefits in waiting periods as 
 per IRDAI guidelines on portability.`,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "CARE PLUS YOUTH PLAN",
                policyWordingUrl: "/pdfs/Care/CarePlusPolicywording.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Care/CarePlusYouthBrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "CARE PLUS COMPLETE PLAN",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `The proposal and declaration given by the proposer and other documents if any shall form the basis of this Contract and is deemed to be incorporated herein. The two parties to this contract are the Policy Holder/Insured/Insured Persons (also referred as You) and Care Health Insurance Limited (also referred as Company/ We/Us), and all the Provisions of Indian Contract Act, 1872, shall hold good in this regard. The references to the singular include references to the plural; references to the male include the references to the female; and references to any statutory enactment include subsequent changes to the same and vice versa. The sentence construction and wordings in the Policy documents should be taken in its true sense and should not be taken in a way so as to take advantage of the Company by filing a claim which deviates from the purpose of Insurance.`,
                benefits:`he insured person will have the option to port the policy 
 to other insurers by applying to such insurer to port the 
 entire policy along with all the members of the family, if 
 any, at least 30 days before, but not earlier than 60 days 
 from the policy renewal date as per IRDAI guidelines  
 related to portability. lf such person is presently covered 
 and has been continuously covered without any lapses 
 under any health insurance policy with an Indian  
 General/Health insurer, the proposed insured person will 
 get the accrued continuity benefits in waiting periods as 
 per IRDAI guidelines on portability.`,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "CARE PLUS COMPLETE PLAN",
                policyWordingUrl: "/pdfs/Care/CarePlusPolicywording.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/Care/CarePlusCompleteBrochure.pdf", // Replace with the actual URL
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
                youtubeLink: "https://www.youtube.com/embed/vXcEL9r3Roo?si=sKtpXCbs4FlgycJk&autoplay=1&mute=1&loop=1&playlist=vXcEL9r3Roo",
                description: `This Policy is a contract of insurance issued by HDFC ERGO 
General Insurance Company Limited (hereinafter called 
the ‘Company’) to the proposer mentioned in the Policy 
Schedule (hereinafter called the ‘Policyholder’) to cover the 
person(s) named in the Policy Schedule (hereinafter called 
the ‘Insured Person(s)’). The Policy is based on the statements 
and declaration provided by the Policyholder in the Proposal 
Form as well as in any welcome or other tele-verification 
calls with the Company’s authorized person and is subject to 
receipt of the requisite premium.`,
                benefits: `The Insured Person will have the option to port the Policy to other insurers by applying to 
such Insurer to port the entire policy along with all the members of the family, if any, at 
least 45 days before, but not earlier than 60 days from the policy renewal date as per IRDAI 
guidelines related to Portability. If such person is presently covered and has been 
continuously covered without any lapses under any health insurance policy with an Indian 
General/Health insurer, the proposed Insured Person will get the accrued continuity 
benefits in waiting periods as per IRDAI guidelines on portability. `,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "OPTIMA RESTORE",
                policyWordingUrl: "/pdfs/HDFC/Optima+Restore-Policy+Wording.pdf", 
                brochureUrl: "/pdfs/HDFC/Optima+Restore-Brochure.pdf", 
              },
            },
            {
              name: "OPTIMA SECURE",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `This Policy is a contract of insurance issued by HDFC ERGO 
General Insurance Company Limited (hereinafter called 
the ‘Company’) to the proposer mentioned in the Policy 
Schedule (hereinafter called the ‘Policyholder’) to cover the 
person(s) named in the Policy Schedule (hereinafter called 
the ‘Insured Person(s)’). The Policy is based on the statements 
and declaration provided by the Policyholder in the Proposal 
Form as well as in any welcome or other tele-verification 
calls with the Company’s authorized person and is subject to 
receipt of the requisite premium.`,
                benefits: `The Insured Person will have the option to port the 
Policy to other insurers by applying to such Insurer to 
port the entire policy along with all the members of the 
family, if any, at least 45 days before, but not earlier 
than 60 days from the policy renewal date as per 
IRDAI guidelines related to Portability. If such person is 
presently covered and has been continuously covered 
without any lapses under any health insurance policy 
with an Indian General/Health insurer, the proposed 
Insured Person will get the accrued continuity benefits 
in waiting periods as per IRDAI guidelines on portability.`,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "OPTIMA SECURE",
                policyWordingUrl: "/pdfs/HDFC/OptimaSecurePolicywording.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/HDFC/OptimaSecureBrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "MY HEALTH SURAKSHA GOLD",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `We will provide insurance cover to the Insured Person(s) 
under this Policy upto Sum Insured or limits mentioned on the 
Schedule of Coverage in the Policy Schedule.
 This Policy is subject to Your statements in respect of all the 
Insured Persons in Proposal form, declaration and/or medical 
reports, payment of premium and the terms and conditions 
of this Policy.`,
                benefits: `The Insured Person will have the option to port the Policy to 
other insurers by applying to such Insurer to port the entire 
policy along with all the members of the family, if any, at least 
45 days before, but not earlier than 60 days from the policy 
renewal date as per IRDAI guidelines related to Portability. If 
such person is presently covered and has been continuously 
covered without any lapses under any health insurance policy 
with an Indian General/Health insurer, the proposed Insured 
Person will get the accrued continuity benefits in waiting 
periods as per IRDAI guidelines on portability.`,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "MY HEALTH SURAKSHA GOLD",
                policyWordingUrl: "/pdfs/HDFC/myHealthSurakshaPolicywording.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/HDFC/myHealthSurakshaBrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "ENERGY",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `This Policy offers cover to individuals with Type 2 Diabetes Mellitus, Impaired Fasting Glucose (IFG), 
Impaired Glucose Tolerance (IGT), Type 1 diabetes and/or Hypertension. The insurance cover is subject 
to the terms, conditions and exclusions of this Policy, your payment of premium and realization 
thereof by us and your statements in the proposal form which is the basis of this Policy.`,
                benefits:   `The insured person will have the option to port the policy to other insurers by applying to such 
insurer to port the entire policy along with all the members of the family, if any, at least 45 days 
before, but not earlier than 60 days from the policy renewal date as per IRDAI guidelines related 
to portability. If such person is presently covered and has been continuously covered without any 
lapses under any health insurance policy with an Indian General/Health insurer, the proposed 
insured person will get the accrued continuity benefits in waiting periods as per IRDAI guidelines 
on portability. `,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "ENERGY",
                policyWordingUrl: "/pdfs/HDFC/EnergyPolicywording.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/HDFC/EnergyBrochure.pdf", // Replace with the actual URL
              },
            },
            {
              name: "MEDISURE SUPER TOPUP",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `We will provide insurance cover to the Insured Person(s) named in the Schedule subject to Your statements 
in the Proposal Form, declaration and/or medical reports, payment of premium and the terms and conditions 
of this Policy, ,  
If during the Policy Period, You suffer from any Illness or Accident which requires Hospitalization as an 
inpatient, We will reimburse the amount of such Medical Expenses as per the benefits given under 
Section C – Scope of Covers, in excess of Aggregate Deductible and subject to a maximum of the Sum 
Insured as stated in the Schedule. The liability of the Company to pay the admissible Claim under that 
Policy Year will commence only once Aggregate Deductible has been exhausted. `,
                benefits:`The Insured Person will have the option to port the Policy to other insurers by applying to such 
Insurer to port the entire policy along with all the members of the family, if any, at least 45 days 
before, but not earlier than 60 days from the policy renewal date as per IRDAI guidelines related to 
Portability. If such person is presently covered and has been continuously covered without any 
lapses under any health insurance policy with an Indian General/Health insurer, the proposed 
Insured Person will get the accrued continuity benefits in waiting periods as per IRDAI guidelines 
on portability. `,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "MEDISURE SUPER TOPUP",
                policyWordingUrl: "/pdfs/HDFC/myHealthMedisurTopupPolicywording.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/HDFC/myHealthMedisureTopupBrochure.pdf", // Replace with the actual URL
              },
            },
          ],
        },
        {
          name: "INDIVIDUAL PERSONAL ACCIDENT [IPA]",
          cities: [
            {
              name: "MY HEALTH KOTY SURAKSHA",
              details: {
                youtubeLink: "https://www.youtube.com/embed/example1",
                description: `We will provide Insurance coverage to the Insured Person(s) under this Policy up to Sum Insured including Cumulative Bonus as 
applicable and subject to waiting periods, limits, Procedure sub-limits, Co-payment,Deductible, Aggregate Deductible as specified 
on the Schedule of Coverage in the Policy Schedule.The Policy is based on  statements, disclosures, declarations made in the Proposal 
form andMedical reports. `,
                benefits :`The Insured Person will have the option to port the Policy to other insurers by applying to such Insurer to port the entire 
policy along with all the members of the family, if any, at least 45 days before, but not earlier than 60 days from the policy 
renewal date as per IRDAI guidelines related to Portability. If such person is presently covered and has been continuously 
covered without any lapses under any health insurance policy with an Indian General/Health insurer, the proposed Insured 
Person will get the accrued continuity benefits in waiting periods as per IRDAI guidelines on portability. `,
                subProducts: ["Cashless Treatment", "No Claim Bonus", "Tax Benefits"],
                heading: "MY HEALTH KOTY SURAKSHA",
                policyWordingUrl: "/pdfs/HDFC/myHealthKotiSurakshaPolicywording.pdf", // Replace with the actual URL
                brochureUrl: "/pdfs/HDFC/myHealthKotiSurakshaBrochure.pdf", // Replace with the actual URL
              },
            },
          ],
        },
      ],
    },
   
  ];
 




  const [country, setCountry] = useState("---Country---");
  const [state, setState] = useState("---state---");
  const [city, setCity] = useState("---city---");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);



  const changeCountry = (event) => {
    setCountry(event.target.value);
    const selectedCountry = countries.find((ctr) => ctr.name === event.target.value);
    setStates(selectedCountry?.states || []);
    setState("---state---");
    setCities([]);
    setCity("---city---");
    setSelectedProduct(null);
  };


  const changeState = (event) => {
    setState(event.target.value);
    const selectedState = states.find((st) => st.name === event.target.value);
    setCities(selectedState?.cities || []);
    setCity("---city---");
    setSelectedProduct(null);
  };

  const changeCity = (event) => {
    setCity(event.target.value);
    const selectedCity = cities.find((ct) => ct.name === event.target.value);
    setSelectedProduct(selectedCity?.details || null);
  };




  return (
    <div style={{ background:"linear-gradient(  White, #bdece6,#bdece6, white )" ,
    //  backgroundColor:"#bdece6"
    }}
     >
      {/* <!-- Back to Top --> */}
    <a href="#" class="btn btn-lg btn-dark btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
        </a>
      {/* Live Search start  */}

      <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
        <h5 className="display-8 mt-5" style={{ color: 'rgb(6, 86, 65)' }}>ALREADY HAVE COVERAGE?</h5>
        <h1 className="display-6 mb-5">Get to Know Your Policy</h1>
      </div>

      <div className="container-fluid" data-wow-delay="0.1s" style={{ padding: 35, background: '#276c63', color: '#15233c', alignContent: "center" }}>
        <div className="containere">
          <div className="row g-2">
            <div className="col-md-12">
              <div className="row g-2">
                <div className="col-md-4 wow fadeInUp" data-wow-delay="0.1s">
                  <select
                    className="form-select border-0 py-3"
                    style={{ backgroundColor: '#d6f1fe', color: '#15233c' }}
                    value={country}
                    onChange={changeCountry}
                  >
                    <option >Company</option>
                    {countries.map((ctr) => (
                      <option key={ctr.name} value={ctr.name}>
                        {ctr.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-4 wow fadeInUp" data-wow-delay="0.3s">
                  <select className="form-select border-0 py-3" style={{ backgroundColor: ' #d6f1fe', color: '#15233c' }}
                    value={state} onChange={changeState}
                  >
                    <option selected>Insurance Type</option>

                    {/* {
                      states.map(state=> (
                        <option value={state.name}>{state.name}</option>
                      ))
                    } */}

                    {states.map((st) => (
                      <option key={st.name} value={st.name}>
                        {st.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 wow fadeInUp" data-wow-delay="0.5s">
                  <select className="form-select border-0 py-3" style={{ backgroundColor: ' #d6f1fe', color: '#15233c' }}
                    value={city} onChange={changeCity}>
                    <option selected>Policy</option>
                    {/* {
                      cities.map(city => (
                        <option value={city}>{city}</option>
                      ))
                    } */}

                    {cities.map((ct) => (
                      <option key={ct.name} value={ct.name}>
                        {ct.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            

            {/* Product Details Section */}
            {selectedProduct && (
              <div
                className="container mt-5 p-4"
                style={{
                  color: "white",
                  background: "#276c63",
                  borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="text-center mb-4">
                  <h2
                    style={{
                      color: "#15233c",
                      background: "#d6f1fe",
                      borderRadius: "15px",
                      padding: "10px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                    }}
                  >
                    {selectedProduct.heading}
                  </h2>
                </div>
                <div className="row g-4 align-items-center">
                  {/* Left column for description */}
                  <div className="col-md-12" style={{
                    color: "white",
                    background: "#276c63",
                    borderRadius: "15px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                    padding: "25px"
                  }}>
                    <h5 className="text-white">
                      <strong className="text-dark"> PREAMBLE:-</strong> {selectedProduct.description}
                    </h5>
                    <h5 className="text-white">
                      <strong className="text-dark"> BENEFITS:-</strong> {selectedProduct.benefits}
                    </h5>
                   
                  </div>

                  
                </div>

                {/* Bottom links */}
                <div className="d-flex justify-content-center flex-wrap mt-4">
                  <a
                    href={selectedProduct.policyWordingUrl}
                    className="btn btn-dark text-white me-2 mb-2"
                    style={{
                      borderRadius: "8px",
                      minWidth: "150px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                    }}
                    target="_blank" // Opens in a new tab
                  // Security best practices
                  >

                    Policy Wording
                  </a>
                  <a
                    href={selectedProduct.brochureUrl}
                    className="btn text-dark mb-2"
                    style={{
                      borderRadius: "8px",
                      background: "#d6f1fe",
                      minWidth: "150px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                    }}
                    target="_blank" // Opens in a new tab
                    rel="noopener noreferrer" // Security best practices
                  >
                    View Policy Brochure
                  </a>
                </div>


              </div>
            )}



          </div>
        </div>
      </div>



      <div className="container-fluid header  p-0 " style={{ background: ' #bdece6' }}>
        <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6 animated wow fadeInUp" data-wow-delay="0.7s">
            <img className="img-fluid" src={first} height="100px" width="600px" alt />
          </div>

          <div className="col-md-6 p-5 mt-lg-5 text-center">
            <h1 className="display-5 animated wow fadeInUp mb-4" data-wow-delay="0.5s" >Understand the benefits of <span style={{ color: '#0a3e39' }}>"Your Policy". </span></h1>
            <p className="animated fadeIn mb-4 pb-2 text-dark"> Explore the terms and conditions in simple, clear language. Uncover the strengths, weaknesses, and missing features of your insurance plan.
            </p>
          </div>

        </div>
      </div>



      {/* Live Search End  */}
      <div className="container-xxl py-5">

        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: 500 }}>
            <h1 className="display-6 mb-5">Our Insurance Partners</h1>
          </div>
          <div className="row g-4 mt-5 justify-content-center">
            <div
              className="col-lg-4 col-xl-3 col-sm-6 wow fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="card">
                <div className="face front-face">
                  <img
                    src={FG}
                    alt="future_img"
                    className="company"
                    height="100px"
                  />

                </div>
                <div className="face back-face">
                  <img
                    src={FG}
                    alt="future_img"
                    className="company"
                    height="100px"
                  />
                 
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-xl-3 col-sm-6 wow fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="card">
                <div className="face front-face">
                  <img
                    src={HDFCERGO}
                    alt="hdfc_img"
                    className="company"
                  />
                  
                </div>
                <div className="face back-face">
                  
                  <img
                    src={HDFCERGO}
                    alt="hdfc_img"
                    className="company"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-xl-3 col-sm-6 wow fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="card">
                <div className="face front-face">
                  <img
                    src={CARE}
                    alt="care_img"
                    className="company"
                  />
                  
                </div>
                <div className="face back-face">
                  
                  <img
                    src={CARE}
                    alt="care_img"
                    className="company"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-xl-3 col-sm-6 wow fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="card">
                <div className="face front-face">
                  <img
                    src={ICICIlombard}
                    alt="ICICI"
                    className="company"
                    height="80px"
                  />
                  
                </div>
                <div className="face back-face">
                  
                  <img
                    src={ICICIlombard}
                    alt="ICICI"
                    className="company"
                    height="80px"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-xl-3 col-sm-6 wow fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="card">
                <div className="face front-face">
                  <img
                    src={NIVBHUPA}
                    alt="niva_img"
                    className="company"
                  />
                 
                </div>
                <div className="face back-face">
                  
                  <img
                    src={NIVBHUPA}
                    alt="niva_img"
                    className="company"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-xl-3 col-sm-6 wow fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="card">
                <div className="face front-face">
                  <img
                    src={TATAAIG}
                    alt="Mitsu_Pandya"
                    className="company"
                  />
                 
                </div>
                <div className="face back-face">
                  
                  <img
                    src={TATAAIG}
                    alt="Mitsu_Pandya"
                    className="company"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-xl-3 col-sm-6 wow fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="card">
                <div className="face front-face">
                  <img
                    src={IFFCO}
                    alt="Mehul_Pradhan"
                    className="Company"
                  />
                 
                </div>
                <div className="face back-face">
                  
                  <img
                    src={IFFCO}
                    alt="Mehul_Pradhan"
                    className="Company"
                  />
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-xl-4 col-sm-6 wow fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="card">
                <div className="face front-face">
                  <img
                    src={LICLOGO}
                    alt="Mehul_Pradhan"
                    className="company"
                  />
                
                </div>
                <div className="face back-face">
                  
                  <img
                    src={LICLOGO}
                    alt="Mehul_Pradhan"
                    className="company"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Live WhatsApp Chat start  */}
        <div className="livechat">
        <a 
          aria-label="Chat on WhatsApp" 
          href="https://wa.me/919104105104?text= hello, I have a question "   
          target="_blank"
          rel="noopener noreferrer"
        >
          <img alt="Chat on WhatsApp" src={WhatsAppBtnn} className="whatsapp-icon" />
        </a>
      </div>
      
      
    </div>
  );
}

export default Company;



