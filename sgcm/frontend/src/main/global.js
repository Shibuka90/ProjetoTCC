import React from "react";

// export const baseApiUrl = "http://localhost:4000"





import axios from 'axios'

export default axios.create({
    baseURL : "http://localhost:4000"
})