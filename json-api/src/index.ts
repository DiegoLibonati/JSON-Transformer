import app from "@/src/app";

import { API_CONFIG } from "@/src/config/config";

app.listen(API_CONFIG.PORT, () => {
  console.log(`Backend running on Port: ${API_CONFIG.PORT}`);
});
