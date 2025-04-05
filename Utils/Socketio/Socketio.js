import { Platform } from "react-native";
import { io } from "socket.io-client";
import { GlobalContext } from "../Context/context";
import { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const baseURL =
  Platform.OS === "android" ? "http://10.0.2.2:8080" : "http://localhost:8080";

const socket = io("http://localhost:8080", {
  transports: ["websocket"], // Use WebSocket transport
  reconnection: true, // Enable reconnection
});

socket.on("connect", () => {
  console.log("Connected to server:", socket.id);
});
