# Meine Test

### End 2 End mit TestCafe

- Ein Test User wird
- d vom Server automatisch angelegt, falls dieser nicht existiert.
    - username : TestUser
    - password : TestPassword

### Was wird nicht vom test Erfasst

- Register function
    - kein Automatisches anlegen von usern solange keine automatische delete funktion implementiert ist.

### Fixtures und Rollen

- Fixture TodoListCheck
    - Rollen
        - testUser
        - testUserWrongCredentials,
    - Page
        - 127.0.0.1:3000
    - before:
        - nothing
    - beforeEach:
        - login
    - after:
        - nothing
    - afterEach:
        - Entfernen aller To-dos, wenn vorhanden
        - logout

### Was wird getestetet

1. Login with Wrong credentials
    1. **Überschreibt** fixture beforeEach mit unbekannter Rolle
    2. **Prüft** ob Welcome header nicht existiert

2. Login with correct credentials
    1. **Prüft** ob Welcome header existiert

3. create and delete Todos
    1. Hinzufügen von 4 to-dos verschiedener Prioritäten
    2. **Prüft** das genau 4 Todos existieren
    3. Löscht ein to-do
    4. **Prüft** das genau 3 Todos existieren

4. set new Todo done and UnDone
    1. Hinzufügen eine to-dos
    2. click auf dieses Todos
    3. **Prüft** img pfad done
    4. click auf dieses Todos
    5. **Prüft** img pfad Undone

5. Todo exist after page reload
    1. Hinzufügen eine to-dos
    2. location.reload
    3. **Prüft** das genau 1 to-do existieren

6. Todo exist after logout and new Login
    1. Hinzufügen eine to-dos
    2. logout
    3. login
    4. **Prüft** das genau 1 to-do existieren

7. Todo remains deleted after logout and new Login
    1. Hinzufügen eine to-dos
    2. löschen eines to-dos
    3. logout
    4. login
    5. **Prüft** das genau 0 to-do existieren

##### Regeln:

1. Nur ein Fixture pro datei
2. Jeder Test funktioniert unabhängig
3. die Webseite wird immer im selben zustand beendet wie gestartet (clear login screen without an backend loginSet )