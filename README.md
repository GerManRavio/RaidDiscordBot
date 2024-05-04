# Slash Raid Discord Bot

Dies ist ein Discord-Bot, der entwickelt wurde, um das Slash-Kommando "createraid" zu unterstützen. Dieses Slash-Kommando ermöglicht es Benutzern, Raid-Gruppen zu organisieren und zu verwalten.

## Installation

1. **Klonen Sie das Repository**

   git clone https://github.com/GerManRavio/RaidDiscordBot.git

2. **Installieren Sie die Abhängigkeiten**

   Wechseln Sie in das Projektverzeichnis und führen Sie den Befehl aus:

   npm install

3. **Konfigurationsdatei erstellen**

   Erstellen Sie eine Datei namens `config.json` im Hauptverzeichnis des Projekts und fügen Sie die folgenden Inhalte ein:

   {
       "token": "TOKEN",
       "clientId": "CLIENTID",
       "guildId": "GUILDID"
   }

   Ersetzen Sie `TOKEN`, `CLIENTID` und `GUILDID` durch Ihre Discord-Bot-Token, Client-ID und Server-ID.

4. **Deployen des Slash-Kommandos**

   Führen Sie den folgenden Befehl aus, um das Slash-Kommando zu deployen:

   node deploy-commands.js

5. **Starten des Bots**

   Führen Sie den folgenden Befehl aus, um den Bot zu starten:

   node index.js

## Verwendung

Sobald der Bot gestartet ist und das Slash-Kommando "Raid" in Ihrem Server aktiviert ist, können Benutzer `/createraid` gefolgt von weiteren Parametern verwenden, um Raid-Gruppen zu erstellen und zu organisieren.

Beispiel:

/raid Bob Startzeit Ziel Datum

## Contributing

Wir begrüßen Beiträge zu diesem Projekt! Wenn Sie einen Fehler finden oder eine Verbesserung vorschlagen möchten, öffnen Sie bitte ein Issue oder senden Sie eine Pull-Request.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Informationen finden Sie in der `LICENSE`-Datei.
