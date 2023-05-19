<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CalculatorController extends Controller
{
    public function calculator(Request $request) 
    {
        $current = $request->current;
        
        $result = eval("return $current;"); 
    
        return response()->json($result);
    }

     public function EquationA(Request $request)
    {
        $valueA = $request->valueA;
        $valueB= $request->valueB;
        if($valueB==0){
            return response()->json(0);
        }else{
            $result = $valueB/$valueA;
            return response()->json($result);
        }
    }

    public function EquationB(Request $request)
    {
        $valueA = $request->valueA;
        $valueB= $request->valueB;
        $valueC= $request->valueC;

        $Delta = (pow($valueB,2))-(4*$valueA*$valueC);

        if($Delta<0){
            return response()->json("n'a pas de solution réelle.");
        }elseif ($Delta==0){
            $x = -1*$valueB/2*$valueA;
             return response()->json($x);   
        }else {
            $x1= number_format(((-1*$valueB) - sqrt($Delta))/2*$valueA,2);
            $x2= number_format(((-1*$valueB) + sqrt($Delta))/2*$valueA,2);
            $x=[$x1,$x2];
            return response()->json($x);
        }
        
    }
}
