import express from "express";

export default function requestLogger(req, res, next) {
    console.log(`\x1b[32m ${req.method} \x1b[0m was requested from \x1b[33m ${req.url} \x1b[0m`);
    next(); // Move to the next middleware or route handler
}

