import HelpCard from "./HelpCard";

export const Help = () => {
  const config = [
    {
      id: 1,
      title: "Your Orders",
      img: "https://s3-alpha-sig.figma.com/img/6611/a197/2e6f704ecc009da3417b9e4c7238bb7f?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U5X7ltGwcr21r1ywZQEKniYQXIUPh9bCjLhAX8N5RYFV5wKb1yEkQIamq-ICpC9QTE4VKPkESTGnPGuogFSuBkwt18dDi6ZmZgVXKRovW3sL-eUiSY8VsBA76Zx5d~udA5AmA-HEc-qm5r7wBnylKIV~iknntVzUFvR3fWhCBYVzs4AlCo0Ryv~7EYeBpe7By47Ir5n4F4nQ2Pa6RruCqFIrgDPGeBFevllqcNV21muKHZo74LYuKUVZnvw0Q-tieH0T0X3EIws1jNUTWBX3RZ1~l6xvIcl4zOTfbvwBAKeoWBnofKlcTy0XdzEcCkJHxD2rhUvAorVIKZgHfFisSQ__",
      description1: "Track Packages",
      description2: "Edit or Cancel orders",
    },
    {
      id: 2,
      title: "Returns & Refunds",
      img: "https://s3-alpha-sig.figma.com/img/85c6/f1ce/e28e0bc6ee246581febdae5e9bc89ff3?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cIsBf2Ho1b6usFBIXnyNaXdvWYw-CNB8tO~SCxb2jx6cKI~DsC0WQmTbuIgBcjYqH3sU~YC3z7I~110CWO9M8vYXHG2tjqFLJFvecad2z1lZo1GDRgHh-NSuNTFdHlaqDs~vmRgUcip3pdAg-43TECaYgi8ZbS~B0RYNq0Tqs52MeeoOdU8HxRd58qCmVmwNTQxYy8hsgQHFq2pNfI4Ae6rAYzF2gWaXwbdiiFw~1sYyhXXLaspyFOLhDcur7ca02bn7gjNYaf7sQlli-mzAelwXJH~NEMfuD0jf1ikyD3ucMhRO1SKToXMZMnkkaVrtAV78SNYbdrQsSF75-XdZ4w__",
      description1: "Return or Exchange items",
      description2: "Refund items & Policies",
    },
    {
      id: 3,
      title: "Payment Settings",
      img: "https://s3-alpha-sig.figma.com/img/fb29/b863/1680c69d1a54d62d8f8e573f33431d95?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I8~y0vM7hMozVbf5JhbfkDIw5U05mLIObf5MNqOshaJZnY~naOQgWgR5F4jUC5Y5FpZqtSNEfkXIYPqSDMtXv41TAVSTHKouuTK1YaHeOAEq-WzaPSlH8eQZ7TzFTx2Ylg8pFr2H2e3hWh2o6HrbyEFA4CeAmqp5vHBJ7B9QEqfR34iQqB64xRwExI5fEd-z3dUzLs80qGb4UqfH6H6ybFfvcYl-o8a~MtlZpoYalek7eDgcXrvtzr1OEQr8UFYqoU51VvDyXycM3y6tj9Cq6TCDBosLi6MOD~QdMRYR3idE~YCKImTxMD6hHUHthst7MOQPyuA3fyyqym5Wp5YfHg__",
      description1: "Add / Edit new payment",
      description2: "Delete Existing payment",
    },
    {
      id: 4,
      title: "Contact Us",
      img: "https://s3-alpha-sig.figma.com/img/7949/512d/9f2c10a793b517003abca48a909b5ba0?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JiEpWDlB2yqixbVKWtHddeAB0eumqhJtqz8UwD6mmI7Ab2cHA1FGaGlDJL15z43roiZJFiEHIMBnOIXgUDKsqu0Ahn4~icAVctgcZA96HLNLRO3hp7v6Jvpq~8XG6Jqm7rYlFlmqxWWcm73PCzTXT7ZXoFzsNk~d4dP0O1GyjQC73rBZQkOEQKBWv6Lhj9-qXcasydXkTWfmNfCnqa2KBUz4ajU~RMks8SxzefslpK4QIXH6sjyyuaVNMHWgubNzE3RrWD4hEIh4Dt34qPXMqUlnM5q51mgHndlv3GTZ936GwZVpj1ODObNrTTFWSXUM2joK2qRDliIpvBZLh9LI~A__",
      description1: "Contact our customer service via phone or chat",
      description2: "",
    },
  ];
  return (
    <div className="">
      <div className=" flex-col p-12">
        <p className="text-black font-poppins text-lg font-semibold leading-normal">
          Hi , Williamson what can we help you with?
        </p>
      </div>

      <div className="flex flex-wrap flex-start gap-10 w-full">
        {config.map((item) => (
          <HelpCard key={item.id} help={item} />
        ))}
      </div>
    </div>
  );
};
