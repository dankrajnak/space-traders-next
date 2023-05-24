import { ContractsApi } from "@/../packages/spacetraders-sdk";
import axios from "@/services/axios";
import Config from "@/services/conf/config";

const ContractsService = new ContractsApi(Config, undefined, axios);

export default ContractsService;
