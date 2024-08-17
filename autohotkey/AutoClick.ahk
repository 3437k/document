#Requires AutoHotkey v2.0

; Configuration
clickInterval := 20  ; Click interval in milliseconds

`::
{
    static on := false
    on := !on
    if on
    {
        SetTimer(Click, 20)  ; Start Click every {clickInterval} ms
    }
    else
    {
        SetTimer(Click, 0)   ; Stop click
    }
}


Esc::ExitApp()