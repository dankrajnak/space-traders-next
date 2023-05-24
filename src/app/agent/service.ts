import { AgentsApi } from "@/../packages/spacetraders-sdk";
import Config from "@/services/conf/config";
import axios from "@/services/axios";

const AgentsService = new AgentsApi(Config, undefined, axios);
export default AgentsService;
