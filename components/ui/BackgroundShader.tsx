'use client';

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

export default function BackgroundShader() {
  return (
    <div className="fixed inset-0 z-0">
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <ShaderGradient
          control="query"
          urlString="https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=0.6&cAzimuthAngle=180&cDistance=3.61&cPolarAngle=90&cameraZoom=1&color1=%23b34fff&color2=%23cc2cdb&color3=%23881be1&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=-1.4&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=1&uDensity=1.6&uFrequency=5.5&uSpeed=0.4&uStrength=7.5&uTime=0&wireframe=false"
        />
      </ShaderGradientCanvas>
    </div>
  );
}
