CreateThread(function()
    while true do
        local ped = PlayerPedId()
        local health = GetEntityHealth(ped) - 100

        if health < 0 then health = 0 end
        if health > 100 then health = 100 end

        local talking = NetworkIsPlayerTalking(PlayerId())

        SendNUIMessage({
            action = 'update',
            health = health,
            talking = talking
        })

        Wait(100)
    end
end)
