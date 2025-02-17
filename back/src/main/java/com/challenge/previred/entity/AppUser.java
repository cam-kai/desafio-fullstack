package com.challenge.previred.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AppUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Schema(description = "ID del usuario", example = "1", hidden = true)
    private Long id;

    @NotBlank(message = "Los nombres no puede estar vacío")
    @Schema(description = "Nombres del usuario", example = "Camila Fernanda")
    private String names;

    @NotBlank(message = "Los apellidos no puede estar vacío")
    @Schema(description = "Apellidos del usuario", example = "Vega Rencoret")
    private String lastNames;

    @NotNull(message = "El RUT no puede ser nulo")
    @Min(value = 1000000, message = "El RUT debe tener al menos 7 dígitos")
    @Max(value = 99999999, message = "El RUT debe tener un máximo de 8 dígitos")
    @Schema(description = "RUT del usuario", example = "11111111")
    private Long rut;

    @NotBlank(message = "El DV no puede estar vacío")
    @Pattern(regexp = "[0-9Kk]", message = "El DV debe ser un número o 'K'")
    @Schema(description = "Dígito verificador del RUT", example = "9")
    private String dv;

    @PastOrPresent(message = "La fecha de nacimiento no puede ser posterior al día de hoy")
    @NotNull(message = "La fecha de nacimiento no puede ser nula")
    @JsonFormat(pattern = "yyyy-MM-dd")
    @Schema(description = "Fecha de nacimiento del usuario", example = "1995-02-27")
    private Date birthdate;

    @Email(message = "El correo electrónico no es válido")
    @NotBlank(message = "El correo electrónico no puede estar vacío")
    @Schema(description = "Correo electrónico del usuario", example = "camila.fernanda1723@gmail.com")
    private String email;

    @NotBlank(message = "La contraseña no puede estar vacía")
    @Schema(description = "Contraseña del usuario", example = "password")
    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNames() {
        return names;
    }

    public void setNames(String  names) {
        this.names = names;
    }

    public void setEmail(String email){
        this.email = email;
    }
}
