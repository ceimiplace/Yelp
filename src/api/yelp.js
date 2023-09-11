import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Xbt6Mta8jedxoY7BFstGLrMJEEmJ4oH0cT2oQbr7w9XbPrO-rEBCRVgXPhIwY_N2xuGyy8rl7Y3aPIT_dLmkus9Nmp_fxrWsirYgbwHQqhm_piHTZbdlDSeG0eDkZHYx",
  },
});
