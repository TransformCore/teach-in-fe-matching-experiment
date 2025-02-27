module.exports = {
    group: function () {
        return "https://fra1.qualtrics.com/API/v3/directories/POOL_eXlYYCcaYMiHNwR/mailinglists/CG_1QoRmBOIp5ne9iE/contacts?includeEmbedded=true";
    },
    college: function () {
        return "https://fra1.qualtrics.com/API/v3/directories/POOL_eXlYYCcaYMiHNwR/mailinglists/CG_2tybuwkdaRRTD3n/contacts?includeEmbedded=true";
    },
    candidate: function () {
        return "https://fra1.qualtrics.com/API/v3/directories/POOL_eXlYYCcaYMiHNwR/mailinglists/CG_3Jqsb9eUesCm2Wc/contacts?includeEmbedded=true";
    },
    updateCollegeGroup: function () {
        return "https://fra1.qualtrics.com/API/v3/directories/POOL_eXlYYCcaYMiHNwR/mailinglists/CG_1QoRmBOIp5ne9iE/contacts";
    },
    updateCandidate: function () {
        return "https://fra1.qualtrics.com/API/v3/directories/POOL_eXlYYCcaYMiHNwR/mailinglists/CG_3Jqsb9eUesCm2Wc/contacts";
    },
    invokeEmailSenderWorkflow: function () {
        return "https://fra1.qualtrics.com/inbound-event/v1/events/json/triggers?urlTokenId=93b4c9ad-94ae-42f8-a8fc-dc3c3b76dcb0";
    },
    qualtricsHeader: function () {
        return {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-API-TOKEN": process.env.QUALTRICS_ENV,
        };
    },
};
