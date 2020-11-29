export const state = () => ({
  questionType: [
    "options",
    "type",
    "optionsWithSpecify",
    "agreeRange",
    "checkboxOptionsWithSpecify"
  ],
  hiv: {
    title: [
      "FACILITY IDENTIFICATION",
      "RESPONDENT IDENTIFICATION",
      "GENERAL SATISFACTION"
    ],
    questions: [
      {
        title: 0,
        question: "Name of Health Facility/Community",
        questionType: 1,
        answer: ""
      },
      {
        title: 0,
        question: "Location of Health Facility/community:",
        options: ["Rural", "Urban", "Semi Urban"],
        questionType: 0,
        answer: ""
      },
      {
        title: 0,
        question: "Type of Health Facility:",
        options: ["Tertiary", "Secondary", "Primary", "One stop shops (OSS)"],
        questionType: 2,
        answer: ""
      },
      {
        title: 0,
        question: "Managing Authority:",
        options: ["Government", "Private", "Faith-based"],
        questionType: 2,
        answer: ""
      },
      {
        title: 1,
        question: "Status at visit to health Facility/community:",
        options: ["Patient", "Caregiver"],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question:
          "How would you rate your health or health of patient if respondent is a caregiver?",
        options: ["Poor", "Fair", "Good", "Very good", "Excellent"],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question: "Age of patient (in years):",
        questionType: 1,
        answer: ""
      },
      {
        title: 1,
        question: "Sex:",
        options: ["Male", "Female"],
        questionType: 2,
        answer: ""
      },
      {
        title: 1,
        question: "If Key population, please specify:",
        options: ["MSM", "FSW", "PWID", "TG"],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question:
          "Are you aware of the existence of any One Stop Shop (OSS) where community members can receive HIV/STI services in a friendly atmosphere? (For KP OSS sites only)",
        options: ["Yes", "No", "Not sure"],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question: "Level of Education:",
        options: [
          "None",
          "Primary",
          "Secondary",
          "Vocational",
          "Post-Secondary"
        ],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question: "Marital Status:",
        options: [
          "Single/Never married",
          "Married",
          "Divorced/ separated",
          "Widowed",
          "Co-habiting"
        ],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question: "Employment Status:",
        options: ["Unemployed", "Employed including self-employed", "Retired"],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question:
          "Duration on ART in this health facility/ community (months or Years)",
        questionType: 1,
        answer: ""
      },
      {
        title: 1,
        question:
          "How long does it take to come to this health facility? (in minutes/ hours)",
        questionType: 1,
        answer: ""
      },
      {
        title: 2,
        question: "I am attended to on time when I come to the clinic.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question:
          "The hospital/community staff discuss my next appointment date with me.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question:
          "The hospital/community staff are friendly to me during clinic appointments.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question:
          "The providers give information on my treatment progress including viral load.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question: "The health workers are too busy to listen to my problems.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question:
          "Some health workers do not treat patients with sufficient respect.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question:
          "The health care worker ensures privacy & confidentiality during our conversation.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question:
          "I spend less than 45 mins (from the start of clinic) when I come for my ARV refills.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question:
          "I am able to reach health providers when I have concerns or challenges.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question: "The hospital/ community working hours is okay for me.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question:
          "There are service fees that prevent me from coming to the health clinic/community center.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question:
          "I have doubts about the ability of doctors & other providers in this health/community facility.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question:
          "I get my ARV drugs in this facility/community whenever I need them.",
        questionType: 3,
        answer: ""
      },
      {
        title: 2,
        question: "Give reason(s) for your missed appointment (> 28 days)",
        questionType: 1,
        answer: ""
      },
      {
        title: 2,
        question:
          "Give reasons why you returned back to the health facility to continue your treatment",
        questionType: 1,
        answer: ""
      },
      {
        title: 2,
        question:
          "How were you treated when you returned after missing your appointment?",
        questionType: 1,
        answer: ""
      },
      {
        title: 2,
        question:
          "Would you recommend this health facility/ community to your friends with similar needs?",
        questionType: 0,
        options: ["Yes", "No", "Not sure"],
        answer: ""
      },
      {
        title: 2,
        question:
          "What factors could make you miss an appointment by more than a week? Tick all that apply",
        questionType: 4,
        options: [
          "Forgetfulness",
          "Lack of transport fare ",
          "Travel",
          "Farming activities",
          "Others pls specify"
        ],
        answer: []
      },
      {
        title: 2,
        question:
          "What can this health facility do to help improve services and make clients remain on ART?",
        questionType: 1,
        answer: ""
      }
    ]
  },
  familyPlanning: {
    title: [
      "RESPONDENTS BACKGROUND",
      "PROVIDER ADHERENCE TO TECHNICAL ASPECTS",
      "ORGANIZATIONAL ASPECT",
      "INTERPERSONAL ASPECT",
      "OUTCOME ASPECT",
      "FAMILY PLANNING SERVICE PAYMENT",
      "FAMILY PLANNING TIME SPENT AND COST",
      "FINANCING FOR FP"
    ],
    questions: [
      {
        title: 0,
        question: "Age",
        questionType: 1,
        answer: ""
      },
      {
        title: 0,
        question: "Sex:",
        options: ["Male", "Female"],
        questionType: 0,
        answer: ""
      },
      {
        title: 0,
        question: "Marital Status:",
        options: [
          "Never Married or in union",
          "Currently Married or in union",
          "Formerly Married(divorced/separated/widowed)"
        ],
        questionType: 0,
        answer: ""
      },
      {
        title: 0,
        question: "Level of Education:",
        options: ["No Education", "Primary", "Secondary and Higher Level"],
        questionType: 0,
        answer: ""
      },
      {
        title: 0,
        question: "How often do you visit the SDP for FP Services:",
        options: [
          "Once a Month",
          "Once every 2 months",
          "Once every 3 months",
          "Others(Please Specify)"
        ],
        questionType: 2,
        answer: ""
      },
      {
        title: 1,
        question:
          "Were you provided with the family planning method of your choice at this SDP?:",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question:
          "Did the family service provider take your preference and wishes into consideration in deciding on the family method you received?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question:
          "Did the health worker teach how to use the family planning method?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question:
          "Did the health worker inform you about what you can do regarding the side effects of the family planning method should occur?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question:
          "Did the health workers infor you about any serious complications that can occur as a result of using the family planning method for which you should come back to the SDP should such occur?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 1,
        question:
          "Were you given any date when you should come back for check up and/or additional supplies?:",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },

      {
        title: 2,
        question:
          "In your opinion did you wait too long for the service to be provided to you?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 2,
        question:
          "Are you satisfied with the cleanliness of the hospital facilities?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 2,
        question: "Are you satisfied with the privacy at the exam room?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 2,
        question:
          "Are you satisfied with the time that was allotted to your case by the health care provider?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 3,
        question:
          "Did staff at the health facility treat you with courtesy and respect?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 3,
        question:
          "Did any of the health services providers force to you to accept or insisted that you should accept the family planning method that you received today?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 3,
        question:
          "Are you satisfied with the attitude of the health provider towards you generally",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 4,
        question: "Are you satisfied with the service you received?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 4,
        question: "Will you continue visiting this SDP in future?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 4,
        question:
          "Would you recommend your relatives or friends to come to this clinic?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 5,
        question:
          "For today's visit did you pay to receive any family planning services?",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 5,
        question:
          "if you paid for anything today please how much did you pay for the following method(amount in local currency)? (indicate for ALL that apply)",
        options: [
          "Card",
          "Laboratory test/x-ray",
          "Contraceptive received from service provider",
          "Consultation fee"
        ],
        questionType: 2,
        answer: ""
      },
      {
        title: 5,
        question:
          "What was the main mode of transportation for you to travel from place of residence to this SDP(Tick only one option)",
        options: [
          "Walked",
          "Bicycle",
          "Motorcycle",
          "Bus/taxi",
          "Private Vehicle"
        ],
        questionType: 2,
        answer: ""
      },
      {
        title: 5,
        question:
          "What distance did you travel from your place of residence to this SDP",
        options: ["1 Kilometres", "2 Mile"],
        questionType: 0,
        answer: ""
      },
      {
        title: 5,
        question:
          "How much did you pay for your travel(from your residence to this SDP) amount in local currency",
        questionType: 1,
        answer: ""
      },
      {
        title: 5,
        question:
          "How much will it cost you to travel from your this SDP back to your residence amount in local currency",
        questionType: 1,
        answer: ""
      },
      {
        title: 6,
        question:
          "How long did it take for you to get the service at this SDP(time it took between your arrival at this SDP and the time you got the service today)",
        questionType: 1,
        answer: ""
      },
      {
        title: 6,
        question:
          "How long will it take  you to travel back to your place of residence",
        questionType: 1,
        answer: ""
      },
      {
        title: 6,
        question:
          "What is the main thing you would have been doing during the time you have been here receiving FP services at this SDP today",
        options: [
          "Household chores",
          "Working on household farm",
          "selling in the market/trading",
          "Employed as unskilled labourer",
          "Employer as skilled labourer",
          "Clerical or professional work",
          "Others . Please specify"
        ],
        questionType: 2,
        answer: ""
      },
      {
        title: 6,
        question:
          "From the activity you referred to in above, who took over the activity on your behalf",
        options: ["Yes", "No"],
        questionType: 0,
        answer: ""
      },
      {
        title: 6,
        question:
          "if yes please indicate or estimate the monetary value of the payment",
        questionType: 1,
        answer: ""
      },
      {
        title: 7,
        question:
          "Please indicate where you obtain the resources to pay for the cost of FP services you have received today?",
        options: [
          "Paid for by myself",
          "Spouse(husband or wife)",
          "Family Members other than spouse(husband or wife), others. please specify"
        ],
        questionType: 2,
        answer: ""
      },
      {
        title: 7,
        question:
          "Please indicate the amount for each of the sources mentioned above for payment for the cost of FP services you have received today?",
        options: [
          "Paid for by myself",
          "Spouse(husband or wife)",
          "Family Members other than spouse(husband or wife), others. please specify"
        ],
        questionType: 2,
        answer: ""
      }
    ]
  }
});

export const getters = {
  getHIVQuestions: state => state.hiv,
  getFamilyPlanningQuestions: state => state.familyPlanning,
  getQuestionTypes: state => state.questionType
};

export const mutations = {};

export const actions = {};
