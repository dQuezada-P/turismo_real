import React from "react";
import { Label, TextInput, FileInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "Campo es requerido.",
  },
  string: {
    matches: "Formato no válido.",
  },
});

const schema = yup
  .object()
  .shape({
    nombre: yup.string().required("Campo requerido"),
    apellidos: yup.string().required("Campo requerido"),
    rut: yup
      .string()
      .matches(/^(\d{7,8}-[\dkK])$/g,'Formato del rut: 15123987-k')
      .required(),
    correo: yup.string().email("Debe tener un Formato de Email").required("Campo requerido"),
    password : yup.string().min(4,'Mínimo 4 caracteres').max(8,'Máximo 8 caracteres').required('Campo requerido'),
    password2: yup.string().oneOf([yup.ref('password'),null],'No coinciden las contraseñas').required()
  })
  .required();

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
    console.log("aaaaaaaaaaa");
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-2xl bg-white dark:bg-gray-700 dark:text-white flex items-center justify-center py-10 rounded-xl drop-shadow-xl">
          <div className="w-full px-10 space-y-8">
            <div>
              <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span className="text-purple-500 dark:text-yellow-300">
                  Regístrate
                </span>{" "}
                para obtener nuestros servicios!!
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="nombre" value="Nombre" />
                    <span className="text-red-500 text-2xl h-full align-middle">
                      *
                    </span>
                  </div>
                  <TextInput
                    id="nombre"
                    type="text"
                    name="nombre"
                    {...register("nombre")}
                    // placeholder="name@flowbite.com"
                    // helperText={<React.Fragment>We’ll never share your details. Read our{' '}<a href="/forms" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</React.Fragment>}
                  />
                  <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                    {errors.nombre?.message}
                  </p>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="apellidos" value="Apellidos" />
                    <span className="text-red-500 text-2xl h-full align-middle">
                      *
                    </span>
                  </div>
                  <TextInput
                    id="apellidos"
                    type="text"
                    name="apellidos"
                    {...register("apellidos")}
                    // placeholder="name@flowbite.com"
                    // helperText={<React.Fragment>We’ll never share your details. Read our{' '}<a href="/forms" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</React.Fragment>}
                  />
                  <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                    {errors.apellidos?.message}
                  </p>
                </div>

                <div id="fileUpload">
                  <div className="mb-2 block">
                    <Label htmlFor="imagen" value="Imagen de perfil" />
                  </div>
                  <FileInput
                    id="imagen"
                    helperText="¡Permítenos conocerte! Si lo desea puedes subir una imagen de perfil."
                    {...register("img")}
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="rut" value="Rut" />
                    <span className="text-red-500 text-2xl h-full align-middle">
                      *
                    </span>
                  </div>
                  <TextInput
                    id="rut"
                    type="text"
                    placeholder="1234567-8"
                    {...register("rut")}
                    // placeholder="name@flowbite.com"
                    // helperText={<React.Fragment>We’ll never share your details. Read our{' '}<a href="/forms" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</React.Fragment>}
                  />
                  <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                    {errors.rut?.message}
                  </p>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="correo" value="Correo" />
                    <span className="text-red-500 text-2xl h-full align-middle">
                      *
                    </span>
                  </div>
                  <TextInput
                    id="correo"
                    type="text"
                    name="correo"
                    placeholder="hola@turismoreal.cl"
                    {...register("correo")}
                    // placeholder="name@flowbite.com"
                    // helperText={<React.Fragment>We’ll never share your details. Read our{' '}<a href="/forms" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</React.Fragment>}
                  />
                  <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                    {errors.correo?.message}
                  </p>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password" value="Contraseña" />
                    <span className="text-red-500 text-2xl h-full align-middle">
                      *
                    </span>
                  </div>
                  <TextInput
                    id="password"
                    type="password"
                    {...register("password")}
                  />
                  <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                    {errors.password?.message}
                  </p>
                </div>

                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="password2" value="Confirmar Contraseña" />
                    <span className="text-red-500 text-2xl h-full align-middle">
                      *
                    </span>
                  </div>
                  <TextInput
                    id="password2"
                    type="password"
                    {...register("password2")}
                  />
                  <p className="text-red-700 dark:text-red-500 text-sm text-end w-full">
                    {errors.password2?.message}
                  </p>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-purple-600 hover:bg-purple-800 dark:bg-yellow-300 dark:hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-yellow-300 focus:ring-offset-2"
                >
                  Registrarme
                </button>

                {/* <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white bg-purple-600 hover:bg-purple-800 dark:bg-purple-500 dark:hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Registrarme
            </button> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
