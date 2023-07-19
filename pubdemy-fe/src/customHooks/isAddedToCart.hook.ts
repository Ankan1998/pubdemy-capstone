import { useSelector } from "react-redux";
import { AppState } from "../redux/store/store";

export function useIsAddedToCart(courseId: number): boolean{
    let cart = useSelector((store:AppState)=> store.cart);
    for(let i=0;i<cart.courses.length;i++){
        if(courseId===cart.courses[i].id){
            return true;
        }           
    }
    return false;

  };