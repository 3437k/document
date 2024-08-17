`::
{           
    static on := false
    on := !on 
    if on
    {        
        Click("Down")
    } 
    Else 
    {
        Click("Up")
    }
    
}

Esc::ExitApp()

