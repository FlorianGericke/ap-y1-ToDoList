# Meine Test

### End 2 End mit TestCafe
 - Ein Test User wird
 - d vom Server automatisch angelegt,
    falls dieser nicht existiert. 
   - username : TestUser
   - password : TestPassword

### Was wird nicht vom test Erfasst
- Register function 
  - kein Automatisches anlegen von usern solange
  keine automatische lösch funktion implementiert ist.

### Fixtures und Rollen

- Fixture TodoListCheck
  - Rollen 
    - testUser 
    - testUserWorngCredentials,
  - Page
    - 127.0.0.1:3000
  - before:
    - nothing 
  - beforeEache:
    - login()
  - after:
    - nothing 
  - afterEach:
    - Entfernen aller To-dos, wenn vorhanden
    - logout()
 
### Was wird getestetet

1. Login with Wrong credentials
   1. **Überschreibt** fixture beforeEach mit unbekannter Rolle
   2. **Prüft** ob Welcome header nicht existiert

2. Login with correct credentials
   1. **Prüft** ob Welcome header existiert

3. create and delete Todos
   1. Hinzufügen von 4 Todos verschiedener Prioritäten
   2. **Prüft** das genau 4 Todos existieren
   3. Löscht ein Todo
   4. **Prüft** das genau 3 Todos existieren

4. set new Todo done and UnDone
   1. Hinzufügen eine todos
   2. click auf dieses Todos
   3. **Prüft** img pfad done 
   4. click auf dieses Todos
   5. **Prüft** img pfad Undone

6. Todo exist after page reload

7. Todo exist after logout and new Login

8. Todo remains deleted after logout and new Login

##### Regeln:
1. Nur ein Fixture pro datei
2. Jeder Test funktioniert unabhängig
3. die Webseite wird immer im selben zustand beended wie 
    gestartet (clear loginscreen without an backend loginSet )