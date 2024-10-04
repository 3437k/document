#Requires AutoHotkey v2.0

global isMouseDown := false

`::{
    static on := false
    on := !on 
    if (on) {        
        Click("Down")
        isMouseDown := true
    } else {
        Click("Up")
        isMouseDown := false
    }
}

#HotIf isMouseDown
~LButton::
~RButton::
~MButton::{
    Click("Up")
    isMouseDown := false
}

#HotIf
^Esc::ExitApp()