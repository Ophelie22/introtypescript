/* Dump SQL: sqlite3 nom_bdd.db .dump > nom_export.sql */
PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE claviers (clavier_id integer primary key autoincrement, name text, modele text);
INSERT INTO claviers VALUES(1,'Logitech','MX mini');
INSERT INTO claviers VALUES(2,'Corsair','K100');
INSERT INTO claviers VALUES(3,'Steelseries','Apex 7');
CREATE TABLE souris (souris_id integer primary key autoincrement, name text, modele text);
INSERT INTO souris VALUES(1,'Logitech','MX300');
INSERT INTO souris VALUES(2,'Logitech','G502');
INSERT INTO souris VALUES(3,'Razer','Naga');
CREATE TABLE ordinateurs (ordinateur_id integer primary key autoincrement, name text, modele text, souris_id integer, clavier_id integer, FOREIGN KEY(souris_id) REFERENCES souris(souris_id), FOREIGN KEY(clavier_id) REFERENCES clavier(clavier_id));
INSERT INTO ordinateurs VALUES(1,'Asus','Zenbook',1,1);
INSERT INTO ordinateurs VALUES(2,'Lenovo','Thinkpad',3,2);
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('claviers',3);
INSERT INTO sqlite_sequence VALUES('souris',3);
INSERT INTO sqlite_sequence VALUES('ordinateurs',2);
COMMIT;