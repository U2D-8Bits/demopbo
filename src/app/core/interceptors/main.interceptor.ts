import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

Injectable({providedIn: 'root'})
export class MainInterceptor implements HttpInterceptor {
    constructor(){}

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>>{
        const modifiedReq = req.clone({
            headers: req.headers.set('Content-Type', 'application/json'),
            responseType: 'json' as 'json'
        });

        return next.handle(modifiedReq)
    }
}