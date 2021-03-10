import http from 'k6/http';

export let options = {
  scenarios: {
    questionnaires: {
      executor: 'constant-arrival-rate',
      rate: 5,
      duration: '1m',
      preAllocatedVUs: 50,
      maxVUs: 100,
    },
  },
};

export default function () {

  var url = 'http://demo-backend-mongo/questionnaires';

  var payload = JSON.stringify( {
    id: 1,
    data: {
        "COLLECTED": {
          "DATENAIS": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SEXE": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DIPLOME": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ETUDE": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "COUPLE": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ETAMATRI": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PACS": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "LNAIS": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DEPNAIS": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PAYSNAIS": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NATIO1N1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NATIO1N2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NATIO1N3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NATIO1N4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NATIO2N": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NBHAB": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NENF013": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NENF1415": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NENF1617": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NADU1874": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NADU75": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NET": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DEBITX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DEBITX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DEBITX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DEBITX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NUSEWEB": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "USEWEB": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SEVWEB": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DEVICEX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DEVICEX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DEVICEX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DEVICEX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DEVICEX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX6": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX7": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX8": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX9": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX10": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX11": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PRATINTXX12": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "EDUPROX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "EDUPROX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "EDUPROX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ADMX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ADMX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ADMX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ADMX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ADMX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISADMX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISADMX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISADMX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISADMX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISADMX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISADMX6": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISADMX7": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISADMX8": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISADMX9": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISADMX10": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISADMX11": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "AIDADMX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "AIDADMX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "AIDADMX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "AIDADMX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "AIDADMX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RENADMX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RENADMX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RENADMX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RENADMX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RENADMX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RENADMX6": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RENADMX7": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RENADMX8": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RENADMX9": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "AUTADM": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ECOM": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DATECOM": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX6": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX7": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX8": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX9": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX10": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX11": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX12": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX13": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX14": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX15": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACHATXX16": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ORIGINEX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ORIGINEX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ORIGINEX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ORIGINEX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PARTACHA": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NUMACHAX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NUMACHAX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NUMACHAX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NUMACHAX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NUMACHAX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NUMACHAX6": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NUMACHAX7": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NUMACHAX8": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SERVACHAX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SERVACHAX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SERVACHAX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SERVACHAX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SERVACHAX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SERVACHAX6": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PARTJOB": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SHARTX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SHARTX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SHARTX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SHARAX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SHARAX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SHARAX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NBCOM": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SOMCOM": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PBACHAX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PBACHAX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PBACHAX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PBACHAX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PBACHAX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PBACHAX6": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PBACHAX7": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PBACHAX8": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PBACHAX9": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PBACHAX10": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PBACHAX11": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "FINANCEX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "FINANCEX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "FINANCEX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "FINANCEX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISACHAX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISACHAX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISACHAX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISACHAX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISACHAX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISACHAX6": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISACHAX7": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISACHAX8": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISACHAX9": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "COMPINFX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "COMPINFX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "COMPINFX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "COMPINFX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "COMPINFX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "COMPINFX6": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "COMPINFX7": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "COMPINFX8": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "COMPINFX9": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "EXCEL": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "INFOX": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "VERIFINFO": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "MOYINFO1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "MOYINFO2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "MOYINFO3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "MOYINFO4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISINFO1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISINFO2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "RAISINFO3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACCESX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACCESX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACCESX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACCESX4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACCESX5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACCESX6": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACCESX7": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SECOOK": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SECUNAV": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PREOCC": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "TRACKING": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NUMEROS": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DECROCHEF": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SMARTPHONEX1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SMARTPHONEX2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SMARTPHONEX3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DECROCHEM": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "OPERATEUR1": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "OPERATEUR2": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "OPERATEUR3": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "OPERATEUR4": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "OPERATEUR5": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "SITUA": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "STATUT": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ENCADR": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "CONTRAT": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "CLASSIF": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "DUREE_EMP": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "PROFESSION": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "ACTILIB": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "NOMBRSAL": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          },
          "TRANCHREVENU": {
            "PREVIOUS": null,
            "COLLECTED": null,
            "FORCED": null,
            "EDITED": null,
            "INPUTED": null
          }
        },
        "EXTERNAL": {},
        "CALCULATED": {
          "JJMMCOURANT": "number(substr(string(current-date()),6,2) || substr(string(current-date()),9,2))",
          "JJMMNAISS": "number(substr(string(),6,2) || substr(string(),9,2))",
          "ANNEECOURANT": "number(substr(string(current-date()),1,4))",
          "ANNEENAISS": "number(substr(string(),1,4))",
          "AGE": "if ( cast(JJMMCOURANT,number) >= cast(JJMMNAISS,number) and cast(ANNEECOURANT,number) > cast(ANNEENAISS,number)) then cast(ANNEECOURANT,number)-cast(ANNEENAISS,number) else if (cast(JJMMCOURANT,number) < cast(JJMMNAISS,number) and cast(ANNEECOURANT,number) > cast(ANNEENAISS,number)) then cast(ANNEECOURANT,number)-cast(ANNEENAISS,number)-1 else 0",
          "plusieurnatio": "if (cast(NATIO1N1,integer) = \"\" and cast(NATIO1N2,integer) = \"\") then \"\" else \"autre\"",
          "emploi": "if (cast(SITUA,string) = \"1\" or cast(SITUA,string) = \"2\" ) then \"emploi actuel, êtes-vous \" else \"dernier emploi, étiez-vous\"",
          "emploi2": "if (cast(SITUA,string) = \"1\" or cast(SITUA,string) = \"2\" ) then \"est\" else \"était\"",
          "emploi3": "if (cast(SITUA,string) = \"1\" or cast(SITUA,string) = \"2\" ) then \"Êtes\" else \"Étiez\"",
          "emploi4": "if (cast(SITUA,string) = \"1\" or cast(SITUA,string) = \"2\" ) then \"Travaillez\" else \"Travailliez\"",
          "emploi5": "if (cast(STATUT,string) = \"10\" and cast(SITUA,string) = \"1\" ) then \"la profession principale de la personne que vous aidez\" else if (cast(STATUT,string) = \"10\" and cast(SITUA,string) = \"2\" ) then \"la profession principale de la personne que vous aidez\" else if (cast(STATUT,string) = \"10\" and cast(SITUA,string) > 2 ) then \"la profession principale de la personne que vous aidiez\" else if (cast(STATUT,string) = \"10\" and cast(SITUA,string) = \"\" ) then \"la profession principale de la personne que vous aidiez\" else \"votre profession principale\"",
          "emploi6": "if ( cast(STATUT,string)  <>  \"\" and cast(STATUT,string) < 8 and ( cast(SITUA,string) = \"1\" or cast(SITUA,string) = \"2\" ) ) then \"où vous travaillez\" else if ( cast(STATUT,string)  <>  \"\" and cast(STATUT,string) < 8 and ( cast(SITUA,string) > 2 or cast(SITUA,string) = \"\" ) ) then \"où vous travailliez\" else if ( (cast(STATUT,string) = \"8\" or cast(STATUT,string) = \"9\" ) and (cast(SITUA,string) = \"1\" or cast(SITUA,string) = \"2\") ) then \"que vous dirigez\" else if ( (cast(STATUT,string) = \"8\" or cast(STATUT,string) = \"9\" ) and (cast(SITUA,string) > 2 or cast(SITUA,string) = \"\") ) then \"que vous dirigiez\" else if ( cast(STATUT,string) = \"10\" and ( cast(SITUA,string) = \"1\" or cast(SITUA,string) = \"2\" ) ) then \"que dirige la personne que vous aidez\" else if ( cast(STATUT,string) = \"10\" and ( cast(SITUA,string) > 2 or cast(SITUA,string) = \"\" ) ) then \"que dirige la personne que vous aidiez\" else if ( cast(STATUT,string) = \"\" and ( cast(SITUA,string) = \"1\" or cast(SITUA,string) = \"2\" ) ) then \"où vous travaillez\" else if ( cast(STATUT,string) = \"\" and ( cast(SITUA,string)  <>  \"\" and cast(SITUA,string) > 2 ) ) then \"où vous travailliez\" else \"où vous travailliez\"",
          "emploi7": "if ( (cast(STATUT,string) = \"8\" or cast(STATUT,string) = \"9\" ) and (cast(SITUA,string) = \"1\" or cast(SITUA,string) = \"2\") ) then \"Combien de salariés employez-vous\" else if ( (cast(STATUT,string) = \"8\" or cast(STATUT,string) = \"9\" ) and (cast(SITUA,string) > 2 or cast(SITUA,string) = \"\") ) then \"Combien de salariés employiez-vous\" else if ( cast(STATUT,string) = \"10\" and ( cast(SITUA,string) = \"1\" or cast(SITUA,string) = \"2\" ) ) then \"Combien de salariés emploie la personne que vous aidez\" else if ( cast(STATUT,string) = \"10\" and ( cast(SITUA,string) > 2 or cast(SITUA,string) = \"\" ) ) then \"Combien de salariés employait la personne que vous aidiez\" else \"\""
        }
      }
    }
  );

  var params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
};