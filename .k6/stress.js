import http from 'k6/http';

export let options = {
  scenarios: {
    questionnaires: {
      executor: 'constant-arrival-rate',
      rate: 10,
      duration: '1m',
      preAllocatedVUs: 50,
      maxVUs: 100,
    },
  },
};

export default function () {
  const response = http.get("http://demo-backend-mongo/questionnaires");
};