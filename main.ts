input.onButtonPressed(Button.A, function () {
    kitronik_VIEW128x64.show("ok", 1, kitronik_VIEW128x64.ShowAlign.Left, kitronik_VIEW128x64.FontSelection.Big)
})
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
kitronik_VIEW128x64.drawRect(120, 60, 4, 2)
basic.pause(2000)
kitronik_VIEW128x64.refresh()
basic.forever(function () {
	
})
