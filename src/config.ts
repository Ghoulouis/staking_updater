import dotenv from "dotenv";
import config from "../config.json";
import { JsonRpcProvider } from "ethers";
dotenv.config();

export const CONFIG = config;

export const PROVIDER = new JsonRpcProvider("https://rpc.berachain.com");
