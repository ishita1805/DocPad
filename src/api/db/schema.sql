CREATE TABLE IF NOT EXISTS "patients" (
	"patient_id"   INTEGER     NOT NULL    PRIMARY KEY     AUTOINCREMENT,
	"name"         VARCHAR     NOT NULL,
	"age"          INTEGER     NOT NULL,
    "number"       NUMERIC     NOT NULL,
    "created_at"   TIMESTAMP   DEFAULT     CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS "prescriptions" (
	"prescription_id"   INTEGER         NOT NULL    PRIMARY KEY     AUTOINCREMENT,
	"diagnosis"         TEXT(255,0)     NOT NULL,
	"complaints"        TEXT(255,0)     NOT NULL,
    "findings"          TEXT(255,0)     NOT NULL,
    "medication"        TEXT            NOT NULL,
    "created_at"        TIMESTAMP       NOT NULL    DEFAULT     CURRENT_TIMESTAMP,
    "patient_id"        INTEGER         NOT NULL,
    FOREIGN KEY (patient_id)
       REFERENCES patients (patient_id) 
);


CREATE INDEX IF NOT EXISTS "name_index" ON patients ("name" COLLATE NOCASE ASC);
CREATE INDEX IF NOT EXISTS "patient_id_index" ON prescriptions ("patient_id" COLLATE NOCASE ASC);

-- INSERT INTO `patients` VALUES (NULL, "Angela Rio", 21, 9003783680, CURRENT_TIMESTAMP), (NULL, "Joe Dummy", 22, 9212373557, CURRENT_TIMESTAMP);