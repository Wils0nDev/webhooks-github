import { Router } from "express";

export interface IOptionsServer {
    port: number;
    routes: Router;
    publicPath?: string;
}