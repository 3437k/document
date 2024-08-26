#Requires AutoHotkey v2.0

clickInterval := 20

`::
{
    static on := false
    on := !on
    if on
    {
        SetTimer(Click, clickInterval)
    }
    else
    {
        SetTimer(Click, 0)
    }
}

Esc::ExitApp()
