# Chaos-backend
Backend Server for Project Chaos

## Routes


    ### http://url/card/add --------- (TYPE - POST)
    body = {
        "s": "Last Card",
        "cardId": 99,
        "cardName":     "Last Card",
        "type":         "Unit",
        "faction":      "pata nhi",
        "manaCost":     8,
        "attack":       3,
        "health":       8,
        "expset":       "Chiffon",
        "craftCost":    8,
        "cardText":     "This card is added through server",
        "cardKeywords": "pata nhi"
    }

    ### http://url/card/remove --------- (TYPE - POST)
    body = {
        "s": "Last Last Card",
        "cardName" : "Lao, Grand Adjudicator"
    }

    ### http://url/card/update --------- (TYPE - POST)
    ### http://url/card/transfer --------- (TYPE - POST)
    ### http://url/card/issue --------- (TYPE - POST)
    body = {
        "cardName": "Blessed Oil",
        "owner": "user2account"
    }

    ### http://url/cards/update --------- (TYPE - POST)

    ### http://url/pack/open --------- (TYPE - POST)
    body = {
        "packId" : 20,
        "owner" : "user2account"
    }

    ### http://url/pack/issue --------- (TYPE - POST)
    body = {
        "packType" : "Type1",
        "owner" : "user2account"
    }

    ### http://url/pack/update --------- (TYPE - POST)

    ### http://url/user/add --------- (TYPE - POST)
    body = {
        "s": "user1",
        "userName": "user2account",
        "actor": "user2account",
        "key": "5KKuYt4FfejEn7r71aiQD32SnevyAPf3GTsUStHpVcV9qGDGWmJ"
    }

    ### http://url/user/remove --------- (TYPE - POST)
    ### http://url/user/transfer --------- (TYPE - POST)
    ### http://url/user/transfer --------- (TYPE - POST)

    ### http://url/buyord/add --------- (TYPE - POST)
    body = {
        "userName" : "user2account",
        "cardId" : 8
    }

    ### http://url/sellord/add --------- (TYPE - POST)
    body = {
        "userName" : "user2account",
        "cardId" : 8
    }

    ### http://url/buyord/rm --------- (TYPE - POST)
    body = {
        "owner" : "user2account",
        "buyOrderId" : 10
    }

    ### http://url/sellord/rm --------- (TYPE - POST)
    body = {
        "owner" : "user2account",
        "sellOrderId" : 10
    }


    ### http://url/table/users' ---------- (TYPE - GET)

    ### http://url/table/packs' ---------- (TYPE - GET)

    ### http://url/table/carddirs' ---------- (TYPE - GET)

    ### http://url/table/sellords' ---------- (TYPE - GET)

    ### http://url/table/buyords' ---------- (TYPE - GET)

    ### http://url/table/cards' ---------- (TYPE - GET)


connect to server - ssh -i "pack_controller.pem" ubuntu@ec2-3-81-38-49.compute-1.amazonaws.com
