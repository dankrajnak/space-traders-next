import { FactionsApi } from "@/../packages/spacetraders-sdk";
import axios from "@/services/axios";
import Config from "@/services/conf/config";

const FactionsService = new FactionsApi(Config, undefined, axios);
export default FactionsService;
