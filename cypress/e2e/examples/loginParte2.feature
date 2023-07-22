Feature: Weekly 27-04-2023

    Scenario: login with wrong data
        Given I access the homepages
        When I type wrong user and password
        Then it must show a message error

    Scenario: login with right user and wrong password
        Given I access the homepages
        When I type the right user and wrong password
        Then it must show a message error

    Scenario: login with right data
        Given I access the homepages
        When I type the right user and password
        Then it log in