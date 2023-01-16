import { Request, Response, NextFunction } from "express";
import Commande from '../models/order.model';

export const create = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const newOrder = new Commande(req.body);
        console.log(req.body);
        console.log("Commande");
        console.log(newOrder);
        const savedOrder = await newOrder.save();
        res.json({
            status: "success",
            data: { ...newOrder },
            message: 'Order created Succesfully',
        });
    } catch(error) {
        next(error);
    }
    
};

export const findOne = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const filter = {_id: req.body.id};
        const order = await Commande.find(filter);
        res.json({
            status: "success",
            data: { ...order },
            message: 'Order found Succesfully',
        });
    } catch(error) {
        next(error);
    }   
};

export const updateOne = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const filter = {_id: req.body.id};
        const update = {status: req.body.status, updteAt: Date.now()}
        const order = await Commande.findOneAndUpdate(filter, update);
        res.json({
            status: "success",
            data: { ...order },
            message: 'Order updated Succesfully',
        });
    } catch(error) {
        next(error);
    }   
};

export const updateStatus = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const filter = {_id: req.params.id};
        const update = {status: req.body.status, updteAt: Date.now()}
        const order = await Commande.findOneAndUpdate(filter, update);
        res.json({
            status: "success",
            data: { ...order },
            message: 'Order status updated Succesfully',
        });
    } catch(error) {
        next(error);
    }   
};

export const orderDelivred = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const filter = {_id: req.body.id};
        const update = {status: req.body.status, updteAt: Date.now(), delivredAt: Date.now()}
        const order = await Commande.findOneAndUpdate(filter, update);
        res.json({
            status: "success",
            data: { ...order },
            message: 'Order delivred Succesfully',
        });
    } catch(error) {
        next(error);
    }   
};

export const all = async (req: Request, res: Response, next: NextFunction) =>{
    try{
        const allOrder = await Commande.find();
        res.json({
            status: "success",
            data: { ...allOrder },
            message: 'Orders found Succesfully',
        });
    } catch(error) {
        next(error);
    }   
};