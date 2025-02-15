import cors from "cors";
export const corsOptions = {
  origin: "*", // or list specific domains
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

export default cors(corsOptions);
