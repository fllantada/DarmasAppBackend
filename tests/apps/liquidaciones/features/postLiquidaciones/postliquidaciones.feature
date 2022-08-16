Feature: Create a new Liquidacion
    In order to show weekly liquidaciones in the plataform
    As a usar with admin permissons
    I want to calculete and post a new Liquidacion

  Scenario: A valid non existing liquidacion
    Given I send POST request to "/liquidaciones"
      """
      {
           "nombre_sucursal": "CAÑUELAS MARIEL ALANIS",
           "Mercadopago Dar Mas": 9400,  
          "id_sucursal": "4",
           "Efectivo": "50200",
           "fecha_inicio": "2022-08-08",   
           "fecha_fin": "2022-08-15",      
           "liquidacion": "22600",
           "link": "http://localhost:3000/api/detalleliquidaciones/7450"   
      }
      """
    Then the response status code shold be 201
    And the response should be empty
