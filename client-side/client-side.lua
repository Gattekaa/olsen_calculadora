local display = false

RegisterCommand("on", function()
    Citizen.CreateThread(function()
      TriggerEvent('calculator:on', true)
    end)
end)
  


RegisterCommand("off", function()
  Citizen.CreateThread(function()
      TriggerEvent("calculator:off", true)
  end)
end)


RegisterNetEvent('calculator:on')
AddEventHandler('calculator:on', function()
  SetNuiFocus(true,true)
  SendNUIMessage({
    type = "ui",
    display = true
  })
end)

RegisterNetEvent('calculator:off')
AddEventHandler('calculator:off', function()
  SetNuiFocus(false,false)
  SendNUIMessage({
    type = "ui",
    display = false
  })
end)
